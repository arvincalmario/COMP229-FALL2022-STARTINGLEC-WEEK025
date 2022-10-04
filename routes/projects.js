var express = require('express');
var router = express.Router();

// Renders the projects page
router.get('/', function(req, res, next) {
    res.render(
      'projects', 
      { 
        title: 'On-going Projects',
        caption: 'some of my on-going projects to learn different programming languages'
      }
    );
  });

  module.exports = router;