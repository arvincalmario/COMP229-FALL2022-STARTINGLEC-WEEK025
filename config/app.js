var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
var homeRouter = require('../routes/home');
var aboutMeRouter = require('../routes/aboutMe');
var projectsRouter = require('../routes/projects');
var servicesRouter = require('../routes/services');
var contactRouter = require('../routes/contact');
var businessContactRouter = require('../routes/bContacts.router');
var userRouter = require('../routes/user.router');



var app = express();

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "sessionSecret"
}));

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules'))); //made static folder for node_modules aalmario

//passport setup
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//routers to navigate in the webpage (by: aalmario)
app.use('/', homeRouter);
app.use('/aboutMe', aboutMeRouter);
app.use('/projects', projectsRouter);
app.use('/services', servicesRouter);
app.use('/contact', contactRouter);
app.use('/businesscontacts', businessContactRouter);
app.use('/users', userRouter);

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
