// Student ID: 301225269
// Name: Arvin Almario
// Data: Oct 28, 2022

var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index.controller')

/* home page response. */
router.get('/', indexController.home);

module.exports = router;
