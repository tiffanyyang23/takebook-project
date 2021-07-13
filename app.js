var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//-------------------------------------------------------
// 增加以下的require
//-------------------------------------------------------
var moment = require('moment');
var bookrank = require('./routes/bookrank');
var pointrank = require('./routes/pointrank');
var discuss = require('./routes/discuss');
var discusstrav = require('./routes/discusstrav');
var discusslit = require('./routes/discusslit');
var discussfin = require('./routes/discussfin');
var discussfood = require('./routes/discussfood');
var discusspsy = require('./routes/discusspsy');
var discussedu = require('./routes/discussedu');
var discusslan = require('./routes/discusslan');
var discussart = require('./routes/discussart');
var discusslif = require('./routes/discusslif');
var discuss2 = require('./routes/discuss2');
var discuss3 = require('./routes/discuss3');
var rules = require('./routes/rules');
var personal = require('./routes/personal');
var personal0 = require('./routes/personal0');
var personal2 = require('./routes/personal2');
var personal3 = require('./routes/personal3');
var personalUpdate = require('./routes/personalUpdate');
var noteAdd = require('./routes/noteAdd');
var noteDelete = require('./routes/noteDelete');
var messAdd = require('./routes/messAdd');
var notedEdit = require('./routes/notedEdit');
var collectbook = require('./routes/collectbook');
//-------------------------------------------------------
// 增加以下的require descuss中的search
//-------------------------------------------------------
var bookListByPage = require('./routes/bookListByPage');
var bookSearchByName = require('./routes/bookSearchByName');
//-------------------------------------------------------
// 增加以下的require index中的login
//-------------------------------------------------------
var loginForm = require('./routes/loginForm');
var login = require('./routes/login');
var logout = require('./routes/logout');
var loginFail = require('./routes/loginFail');
var logout = require('./routes/logout');
var loginSuccess = require('./routes/loginSuccess');
//-------------------------------------------------------
// 增加以下的require user登入成功後可進入的介面
//-------------------------------------------------------
var userIndex = require('./routes/userIndex');
var userbookrank = require('./routes/userbookrank');
var userbookrank2017 = require('./routes/userbookrank2017');
var userbookrank2016 = require('./routes/userbookrank2016');
var userpointrank = require('./routes/userpointrank');
var userpointrank2017 = require('./routes/userpointrank2017');
var userpointrank2016 = require('./routes/userpointrank2016');
var userDiscuss = require('./routes/userDiscuss');
var userDiscusslit = require('./routes/userDiscusslit');
var userDiscusstrav = require('./routes/userDiscusstrav');
var userDiscussfin = require('./routes/userDiscussfin');
var userDiscussfood = require('./routes/userDiscussfood');
var userDiscusspsy = require('./routes/userDiscusspsy');
var userDiscussedu = require('./routes/userDiscussedu');
var userDiscusslan = require('./routes/userDiscusslan');
var userDiscussart = require('./routes/userDiscussart');
var userDiscusslif = require('./routes/userDiscusslif');
var userDiscuss2 = require('./routes/userDiscuss2');
var userDiscuss3 = require('./routes/userDiscuss3');
var userRules = require('./routes/userRules');
var bookrank2017 = require('./routes/bookrank2017');
var bookrank2016 = require('./routes/bookrank2016');
var pointrank2017 = require('./routes/pointrank2017');
var pointrank2016 = require('./routes/pointrank2016');
//-------------------------------------------------------
// 增加以下的require index中的register
//-------------------------------------------------------
var register = require('./routes/register');

//-------------------------------------------------------
// 增加以下的require(後端)
//-------------------------------------------------------
var takeBookMangerIndex = require('./routes/takeBookMangerIndex');
var mangerIndex = require('./routes/mangerIndex');

var mangerRules = require('./routes/mangerRules');
var OneRule = require('./routes/OneRule');
var ruleDelete = require('./routes/ruleDelete');
var ruleModifyForm = require('./routes/ruleModifyForm');
var ruleModify = require('./routes/ruleModify');
var ruleAddForm = require('./routes/ruleAddForm');
var ruleAdd = require('./routes/ruleAdd');

var bookAddForm = require('./routes/bookAddForm');
var bookAdd = require('./routes/bookAdd');
var bookListByPageManger = require('./routes/bookListByPageManger');
var bookListSearchByName = require('./routes/bookListSearchByName');
var bookOneItem = require('./routes/bookOneItem');
var bookUpdateForm = require('./routes/bookUpdateForm');
var bookUpdate = require('./routes/bookUpdate');
var bookDelete = require('./routes/bookDelete');

var mangerAddForm = require('./routes/mangerAddForm');
var mangerAdd = require('./routes/mangerAdd');
var mangerListByPage = require('./routes/mangerListByPage');
var mangerListSearchByName = require('./routes/mangerListSearchByName');
var mangerUpdateForm = require('./routes/mangerUpdateForm');
var mangerUpdate = require('./routes/mangerUpdate');
var mangerDelete = require('./routes/mangerDelete');

var mangerLogin = require('./routes/mangerLogin');
var mangerLoginSuccess = require('./routes/mangerLoginSuccess');
var mangerLoginFail = require('./routes/mangerLoginFail');
var mangerLogout = require('./routes/mangerLogout');
//-------------------------------------------------------

var app = express();
require('./ssl/sslLicense')(app);
//-----------------------------------------
// 增加使用session及uuid
//-----------------------------------------
var session=require('express-session');
var uuid=require('uuid');

app.use(session({
    genid:function(req){
        return uuid.v1();
    },
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true
}));
//-----------------------------------------

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//-------------------------------------------------------
// 增加以下的app.use()
//-------------------------------------------------------
app.use('/bookrank',bookrank);
app.use('/pointrank',pointrank);
app.use('/discuss', discuss);
app.use('/discusslit', discusslit);
app.use('/discusstrav', discusstrav);
app.use('/discussfin', discussfin);
app.use('/discussfood', discussfood);
app.use('/discusspsy', discusspsy);
app.use('/discussedu', discussedu);
app.use('/discusslan', discusslan);
app.use('/discussart', discussart);
app.use('/discusslif', discusslif);
app.use('/discuss2', discuss2);
app.use('/discuss3', discuss3);
app.use('/rules', rules);
app.use('/personal', personal);
app.use('/personal0',personal0);
app.use('/personal2',personal2);
app.use('/personal3',personal3);
app.use('/personalUpdate',personalUpdate);
app.use('/noteAdd',noteAdd);
app.use('/noteDelete',noteDelete);
app.use('/messAdd',messAdd);
app.use('/notedEdit',notedEdit);
app.use('/collectbook',collectbook);
//-------------------------------------------------------
// 增加以下的app.use() descuss中的search
//-------------------------------------------------------
app.use('/bookListByPage', bookListByPage);
app.use('/bookSearchByName', bookSearchByName);
//-------------------------------------------------------
// 增加以下的require index中的login
//-------------------------------------------------------
app.use('/loginForm', loginForm);
app.use('/login', login);
app.use('/logout', logout);
app.use('/loginFail', loginFail);
app.use('/logout', logout);
app.use('/loginSuccess', loginSuccess);
//-------------------------------------------------------
// 增加以下的require user登入後可使用的介面
//-------------------------------------------------------
app.use('/userIndex', userIndex);
app.use('/userbookrank', userbookrank);
app.use('/userbookrank2017', userbookrank2017);
app.use('/userbookrank2016', userbookrank2016);
app.use('/userpointrank', userpointrank);
app.use('/userpointrank2017', userpointrank2017);
app.use('/userpointrank2016', userpointrank2016);
app.use('/userDiscuss',userDiscuss);
app.use('/userDiscusslit',userDiscusslit);
app.use('/userDiscusstrav',userDiscusstrav);
app.use('/userDiscussfin',userDiscussfin);
app.use('/userDiscussfood',userDiscussfood);
app.use('/userDiscusspsy',userDiscusspsy);
app.use('/userDiscussedu',userDiscussedu);
app.use('/userDiscusslan',userDiscusslan);
app.use('/userDiscussart',userDiscussart);
app.use('/userDiscusslif',userDiscusslif);
app.use('/userDiscuss2', userDiscuss2);
app.use('/userDiscuss3', userDiscuss3);
app.use('/userRules', userRules);
app.use('/bookrank2017',bookrank2017);
app.use('/bookrank2016',bookrank2016);
app.use('/pointrank2017',pointrank2017);
app.use('/pointrank2016',pointrank2016);
//-------------------------------------------------------
// 增加以下的app.use() index中的register
//-------------------------------------------------------
app.use('/register', register);
//-------------------------------------------------------
// 增加以下的app.use() 後端
//-------------------------------------------------------
app.use('/takeBookMangerIndex', takeBookMangerIndex);
app.use('/mangerIndex', mangerIndex);

app.use('/mangerRules', mangerRules);
app.use('/OneRule', OneRule);
app.use('/ruleDelete', ruleDelete);
app.use('/ruleModifyForm', ruleModifyForm);
app.use('/ruleModify', ruleModify);
app.use('/ruleAddForm', ruleAddForm);
app.use('/ruleAdd', ruleAdd);

app.use('/bookAddForm', bookAddForm);
app.use('/bookAdd', bookAdd);
app.use('/bookListByPageManger', bookListByPageManger);
app.use('/bookListSearchByName', bookListSearchByName);
app.use('/bookOneItem', bookOneItem);
app.use('/bookUpdateForm', bookUpdateForm);
app.use('/bookUpdate', bookUpdate);
app.use('/bookDelete', bookDelete);

app.use('/mangerAddForm', mangerAddForm);
app.use('/mangerAdd', mangerAdd);
app.use('/mangerListByPage', mangerListByPage);
app.use('/mangerListSearchByName', mangerListSearchByName);
app.use('/mangerUpdateForm', mangerUpdateForm);
app.use('/mangerUpdate', mangerUpdate);
app.use('/mangerDelete', mangerDelete);

app.use('/mangerLogin', mangerLogin);
app.use('/mangerLoginSuccess', mangerLoginSuccess);
app.use('/mangerLoginFail', mangerLoginFail);
app.use('/mangerLogout', mangerLogout);

//-------------------------------------------------------


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//-------------------------------------------------------
// 增加以下的function
//-------------------------------------------------------
app.locals.myDateFormat = function(date){
  return moment(date).format('YYYY-MM-DD');
};

module.exports = app;
