// Student ID: 301225269
// Name: Arvin Almario
// Data: Oct 03, 2022

var express = require('express');
var router = express.Router();

/* project response */
router.get('/', function(req, res, next) {
    res.render(
      'projects', 
      { 
        title: 'Projects',
        caption: 'some of my on-going projects to learn different programming languages'
      }
    );
  });

  module.exports = router;