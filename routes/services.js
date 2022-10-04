var express = require('express');
var router = express.Router();

// Renders the services page
router.get('/', function(req, res, next) {
    res.render(
      'services', 
      { 
        title: 'services',
      }
    );
  });

  module.exports = router;