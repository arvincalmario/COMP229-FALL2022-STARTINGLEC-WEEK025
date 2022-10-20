// Student ID: 301225269
// Name: Arvin Almario
// Data: Oct 03, 2022

var express = require('express');
var router = express.Router();

/* home page response. */
router.get('/', function(req, res, next) {
  res.render(
    'user', 
    { 
      title: 'Home', 
      mission: 'to provide out of the box ideas that gives my clients advantage to their business competitors.',
      vision: 'to create a better everyday life for many people.', 
    }
  );
});

module.exports = router;