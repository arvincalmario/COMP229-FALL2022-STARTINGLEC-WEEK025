var express = require('express');
var router = express.Router();

/* GET Contact listing. */
router.get('/', function(req, res, next) {
  res.render(
    'contact', 
    { 
      title: 'Contact', 
      name: 'Arvin contact' 
    }
  );
});

module.exports = router;