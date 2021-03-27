const express = require('express');
const cors = require('cors');
const app = express();
const mysqlDb = require('./mysqlDb');
const news = require('./app/news');
const comments = require('./app/comments');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));


const port = 8000;

app.use('/news', news);
app.use('/comments', comments);

const run = async () => {
    await mysqlDb.connect();

    app.listen(port, ()=>{
        console.log('server started on ' + port);
    });
};

run().catch(console.error);