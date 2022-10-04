var express = require('express');
var router = express.Router();

/* GET aboutMe listing. */
router.get('/', function(req, res, next) {
  res.render(
    'aboutMe', 
    { 
      title: 'About me', 
      name: 'Arvin aboutME' 
    }
  );
});

module.exports = router;