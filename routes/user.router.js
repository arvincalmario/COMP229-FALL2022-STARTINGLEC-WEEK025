// Student ID: 301225269
// Name: Arvin Almario
// Data: Oct 28, 2022

let express = require('express');
let router = express.Router();
let usersController = require('../controllers/users.controller');
let passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {  
  res.render('users', { 
    title: 'Users',
  });
});

router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

router.get('/signout', usersController.signout);

module.exports = router;
