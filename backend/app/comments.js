const express = require('express');
const mysqlDb = require('../mysqlDb');

const router = express.Router();

router.get('/', async (req,res)=>{
    const [data] = await mysqlDb.getConnection().query(
        'SELECT * FROM comments_table'
    );
    res.send(data);
});

router.get('/:id', async (req,res)=>{
    const [data] = await mysqlDb.getConnection().query(
        'SELECT * FROM comments_table WHERE id=?', [req.params.id]);
    res.send(data[0]);
});

router.post('/', async (req,res) => {
    const comment = req.body;
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

module.exports = router;