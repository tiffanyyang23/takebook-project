var express = require('express');
var router = express.Router();

//----------------------------------------------
// 載入使用權檢查
//----------------------------------------------
var authorize = require('./lib/authorize.js');
//----------------------------------------------
var pool = require('./lib/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {	
    //------------------------------------------
    // 如尚未登入, 轉至未登入頁面
    //------------------------------------------
    if(!authorize.isPass(req)){
        res.render(authorize.illegalURL, {});
        return;
    }
    //------------------------------------------

	
    res.render('mangerIndex', {mangerName:req.session.mangerName});
});

module.exports = router;