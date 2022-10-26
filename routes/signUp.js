// Student ID: 301225269
// Name: Arvin Almario
// Data: Oct 03, 2022

var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index.controller')

/* contact response. */
router.get('/', indexController.signUp);

module.exports = router;