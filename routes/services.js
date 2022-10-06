// Student ID: 301225269
// Name: Arvin Almario
// Data: Oct 03, 2022

var express = require('express');
var router = express.Router();

/* services page response */
router.get('/', function(req, res, next) {
    res.render(
      'services', 
      { 
        title: 'Services',
        serviceA: 'I build websites based on clients preference, and modify a bit to fit their personality. Click the link to see some of the creative website i can create. (note: this is not mine, only for homework purposes. credits to the owner of that page.)',
        serviceB: 'I build mobile applications from scratch, or create a mobile app based on an already built website of a client.',
        serviceC: 'I build database structure to cater clients data bank.'

      }
    );
  });

  module.exports = router;