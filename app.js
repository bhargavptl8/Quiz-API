var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var adminRouter = require('./routes/admin');
var categoryRouter = require('./routes/category');
var subCategoryRouter = require('./routes/subCategory');
var zoneRouter = require('./routes/zone');
var technologyRouter = require('./routes/technology');
var questionAnsRouter = require('./routes/questionAns');

var landingRouter = require('./routes/landing');


mongoose.connect('mongodb://127.0.0.1:27017/QuizApp(API)')
  .then(() => console.log('Connected!'))
  .catch((error) => console.log(error))

var app = express();

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

app.use('/admin', adminRouter);
app.use('/admin/category', categoryRouter);
app.use('/admin/subcategory', subCategoryRouter);
app.use('/admin/zone', zoneRouter);
app.use('/admin/technology', technologyRouter);
app.use('/admin/questionans', questionAnsRouter);

app.use('/landing', landingRouter);

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

module.exports = app;
