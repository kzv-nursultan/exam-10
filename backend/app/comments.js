const express = require('express');
const mysqlDb = require('../mysqlDb');

const router = express.Router();

router.get('/', async (req,res)=>{
    if(req.query.news_id) {
        const [data] = await mysqlDb.getConnection().query(
            'SELECT * FROM comments_table WHERE news_id=?',
            [req.query.news_id]
        );
        res.send(data);
    } else {
        const [data] = await mysqlDb.getConnection().query(
            'SELECT * FROM comments_table'
        );
        res.send(data);
    }
});

router.get('/:id', async (req,res)=>{
    const [data] = await mysqlDb.getConnection().query(
        'SELECT * FROM comments_table WHERE id=?', [req.params.id]);
    res.send(data[0]);
});

router.post('/', async (req,res) => {
    const comment = req.body;
    console.log(req.body);
    if (comment.news_id && comment.body) {
        if(!comment.author){
            comment.author = "Anonymous";
        };
        await mysqlDb.getConnection().query(
            'INSERT INTO comments_table (news_id, comment_author, comment_text) VALUES(?,?,?)',
            [comment.news_id, comment.author, comment.body]);
        res.send(comment);
    } else {
        res.status(400).send('check your inputs');
    }
});

router.delete('/:id', async (req,res)=> {
    await mysqlDb.getConnection().query(
        'DELETE FROM comments_table WHERE id = ?',[req.params.id]);
    res.send('Deleted');
});

module.exports = router;