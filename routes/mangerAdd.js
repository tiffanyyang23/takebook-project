var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//------------------
// 載入資料庫連結
//------------------
var pool = require('./lib/db.js');


/* GET home page. */
router.post('/', function(req, res) {
    //取得使用者傳來的參數
    var mangerId=req.param("mangerId");
    var mangerName=req.param("mangerName");
    var password=req.param("password");
    
    //建立一個新資料物件
    var newData={
        mangerId:mangerId,
        mangerName:mangerName,
        password:password
    }	
	
    pool.query('INSERT INTO manger SET ?', newData, function(err, rows, fields) {
        if (err){
            res.render('mangerAddFail', {});     //新增失敗
        }else{
            res.render('mangerAddSuccess', {});  //新增成功
        }
    });
});

module.exports = router;