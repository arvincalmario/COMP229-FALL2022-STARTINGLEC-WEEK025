// Student ID: 301225269
// Name: Arvin Almario
// Data: Oct 03, 2022

var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index.controller')

/* About Me response */
router.get('/', indexController.aboutMe);

module.exports = router;
