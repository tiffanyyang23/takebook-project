var express = require('express');
var router = express.Router();
//----------------------------------------------------
// 透過require引用db.js的pool物件,
// 即使多個程式均引用, 在系統中只有一份pool物件.
//----------------------------------------------------
var pool = require('./lib/db.js');
//----------------------------------------------
// 載入使用權檢查
//----------------------------------------------
var authorize = require('./lib/authorize.js');
//----------------------------------------------


/* GET home page. */
router.get('/', function(req, res, next) {
    var userid=req.session.userid;
    var personalData;
    var noteData;
	var messengeData;
	var collectionData;


    //------------------------------------------
    // 如尚未登入, 轉至未登入頁面
    //------------------------------------------
    if(!authorize.isPass(req)){
        res.render(authorize.illegalURL, {});
        return;
    }
    //------------------------------------------

    pool.query('select * from users ', function(err, results) {       
        if (err) {
            personalData=[];
        }else{
            personalData=results;
        }

        pool.query('SELECT a.bookNo,a.noteId,SUBSTRING(a.noteContent,1,35) as noteContent,a.noteTitle,a.date,b.picture FROM note a LEFT JOIN book AS b ON a.bookNo=b.bookNo where userid=? GROUP BY noteId ORDER BY date DESC', [userid], function(err, results, fields) {
            if (err) {
                noteData=[];
            }else{
                noteData=results;
            }
		
		pool.query('select a.noteTitle, b.userid, b.mesContent ,b.date ,c.avatar ,c.nickName FROM note a, message b ,users c WHERE a.noteid = b.noteid AND c.userid = b.userid AND a.userid = ? AND b.userid!=? AND year(b.date)=YEAR(NOW())And month(b.date)=MONTH(NOW()) And day(b.date)=DAY(NOW()) ORDER BY date DESC', [userid,userid], function(err, results, fields){
            if (err) {
                messengeData=[];
            }else{
                messengeData=results;
            }
			
		pool.query('SELECT a.bookNo,a.date,b.bookName,b.author,b.publisher,b.picture FROM collection a LEFT JOIN book AS b ON a.bookNo=b.bookNo where userid=? Group BY date DESC', [userid], function(err, results, fields){
            if (err) {
                collectionData=[];
            }else{
                collectionData=results;
            }
			
		pool.query(' SELECT serNo,bookName,picture, SUBSTRING(content,1,200) as content FROM book WHERE serNo IS NOT NULL and bookName IS NOT NULL and picture IS NOT NULL and content IS NOT NULL ORDER BY RAND() LIMIT 1', function(err, results, fields) {
            if (err) {
                bookData=[];
            }else{
                bookData=results;
            }
			
		res.render('personal0', {userid:req.session.userid, nickName:req.session.nickName, sign:req.session.sign, avatar:req.session.avatar,personalData:personalData, noteData:noteData, messengeData:messengeData, collectionData:collectionData, bookData:bookData});
		});
		});
		});
		});
    });
});



module.exports = router;


