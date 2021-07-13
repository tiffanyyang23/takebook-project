var express = require('express');
var router = express.Router();
//var mysql = require('mysql');

//------------------
// 載入資料庫連結
//-----------------
var pool = require('./lib/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
   pool.query('SELECT a.noteContent,a.noteId,a.date,b.nickName,b.avatar,c.bookName,c.content,c.type,c.bookNo,c.serNo  FROM note a LEFT JOIN users AS b ON a.userid=b.userid LEFT JOIN book AS c ON c.bookNo=a.bookNo where c.type="藝術設計" GROUP BY noteId', function (error, results, fields) {
        if (error){
            res.render('userDiscussart', {data:[]});
        }else{
            res.render('userDiscussart', {data:results});
        }       
    });
});

module.exports = router;
