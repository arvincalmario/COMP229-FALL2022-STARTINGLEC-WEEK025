// Student ID: 301225269
// Name: Arvin Almario
// Data: Oct 03, 2022

var express = require('express');
var router = express.Router();

/* inventory response. */
router.get('/', function(req, res, next) {
  res.render(
    'inventory', 
    { 
      title: 'Contact', 
      phone: '+63 919-3033871',
      mobile: '+1 989-23090',
      email: 'aalmario@my.centennialcollege.ca'
    }
  );
});

module.exports = router;