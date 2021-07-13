var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//------------------
// 載入資料庫連結
//-----------------
var pool = require('./lib/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
   var bookNo=req.param('bookNo');
   
   pool.query('SELECT a.noteContent,a.noteTitle,a.noteId,b.nickName,b.avatar,c.bookName,c.bookNo,c.author,c.publisher,c.date,c.type,c.language,c.picture,c.authorIntro,c.content FROM note a LEFT JOIN users AS b ON a.userid=b.userid LEFT JOIN book AS c ON c.bookNo=a.bookNo where c.bookNo=?  GROUP BY noteId',[bookNo],  function (err, rows, fields) {
        if (err) throw err;

		if(rows.length==0){
			res.render('DataNotFound', {});         
		}else{
			res.render('userdiscuss3', { data: rows });   
		}	
	    
    });
});

module.exports = router;
