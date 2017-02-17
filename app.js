var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var config = require('./config');
//var multer = require('multer');

//mongoose.connect('localhost: 27017/shopping');
var app = express();
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});
app.set('port', process.env.PORT || 3000);


var index = require('./routes/index');
var menu = require('./routes/menu');
var breakfast = require('./routes/breakfastMenu');
var lunch = require('./routes/lunchMenu');
var dinner = require('./routes/dinnerMenu');
//var upload = require('./routes/upload');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressHbs({extname: '.hbs' , layoutsDir: __dirname + '/views/layouts/'}));

app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/menu', menu);
app.use('/breakfastMenu', breakfast);
app.use('/lunchMenu', lunch);
app.use('/dinnerMenu', dinner);
//app.use('/upload', upload);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
