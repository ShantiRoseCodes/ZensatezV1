const cors = require('cors'); 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var fileUpload = require('express-fileupload');

var indexRouter = require('./routes/index');
// var orderRouter = require('./routes/index'); 
// var require new routers here


// var imageRouter = require ('./routes/images');

var app = express();
app.use(cors()); 
//need to use file upload
// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/.tmp/"
//   })
// );

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
// app.engine('html', require('ejs').renderFile);





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public/index.html')));

// serve static images from public/images 
// app.use(express.static('public'));

// app.use('/images', imageRouter);

app.use('/index', indexRouter);


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
  res.send('error');
});

module.exports = app;
