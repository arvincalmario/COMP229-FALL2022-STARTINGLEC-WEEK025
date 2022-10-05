// Student ID: 1234568796
// Name: Julio Vinicius
// Data: Oct 01, 2022

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'home', 
    { 
      title: 'Home', 
      mission: 'to provide out of the box ideas that gives my clients advantage to their business competitors' 
    }
  );
});

module.exports = router;