const express = require('express');
const multer = require('multer');
const path = require('path');
const config = require('../config');
const { nanoid } = require('nanoid');
const mysqlDb = require('../mysqlDb');

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, config.uploadPath);
    },
    filename:(req,file,cb)=>{
        cb(null,nanoid()+path.extname(file.originalname));
    }
});


const upload = multer({storage});

const router = express.Router();

router.get('/', async (req,res)=>{
    const [data] = await mysqlDb.getConnection().query(
        'SELECT * FROM news_table');
    res.send(data);
});

router.get('/:id', async (req,res)=>{
    const [data] = await mysqlDb.getConnection().query(
        'SELECT * FROM news_table WHERE id=?', [req.params.id]);
    res.send(data[0]);
});

router.post('/', upload.single('image'), async (req,res)=>{
    const news = req.body;
    console.log(req.body)
    if(news.title && news.body) {
        news.date = new Date();
        if(req.file) {
            news.image = req.file.filename;
        };
        await mysqlDb.getConnection().query(
            'INSERT INTO news_table (news_title, news_body, news_image, news_date) VALUES (?,?,?,?)',
            [news.title, news.body, news.image, news.date]
        );
        res.send(news);
    } else {
        res.status(400).send('Bad request!')
    }
})

module.exports = router;