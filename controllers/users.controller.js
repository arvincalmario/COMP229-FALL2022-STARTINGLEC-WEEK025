// Student ID: 301225269
// Name: Arvin Almario
// Data: Oct 28, 2022

let User = require('../models/users.model');
let passport = require('passport');

function getErrorMessage(err) {
  console.log("===> Erro: " + err);
  let message = '';

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Username already exists';
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }

  return message;
};

module.exports.renderSignin = function(req, res, next) {
  if (!req.user) {
    res.render('authentication/logIn', {
      title: 'Sign-in Form',
      messages: req.flash('error') || req.flash('info'),
      userName: req.user ? req.user.username : ''
    });
  } else {
    console.log(req.user);
    return res.redirect('/');
  }
};

module.exports.renderSignup = function(req, res, next) {
  if (!req.user) {

    // creates a empty new user object.
    let newUser = User();

    res.render('authentication/signUp', {
      title: 'Sign-up Form',
      messages: req.flash('error'),
      user: newUser,
      userName: req.user ? req.user.username : ''
    });

  } else {
    return res.redirect('/');
  }
};

module.exports.signup = function(req, res, next) {
  if (!req.user && req.body.password === req.body.password_confirm) {
    console.log(req.body);

    let user = new User(req.body);
    user.provider = 'local';
    console.log(user);

    user.save((err) => {
      if (err) {
        let message = getErrorMessage(err);

        req.flash('error', message);
        // return res.redirect('/users/signup');
        return res.render('authentication/signUp', {
          title: 'Sign-up Form',
          messages: req.flash('error'),
          user: user,
          userName: req.user ? req.user.username : ''
        });
      }
      req.login(user, (err) => {
        if (err) return next(err);
        return res.redirect('/');
      });
    });
  } else {
    return res.redirect('/');
  }
};

module.exports.signout = function(req, res, next) {
  req.logout();
  res.redirect('/');
};

module.exports.signin = function(req, res, next){
  passport.authenticate('local', {   
    successRedirect: req.session.url || '/',
    failureRedirect: '/users/signin',
    failureFlash: true
  })(req, res, next);
  delete req.session.url;
}