var express = require('express');
var router = express.Router();

/* GET aboutMe listing. */
router.get('/', function(req, res, next) {
  res.render(
    'aboutMe', 
    { 
      title: 'About Me',
      FullName: 'Arvin Almario',
      nickName: 'Arvin', 
      address: 'Scarborough, Ontario, CA',
      descriptionOfMe: 'I am an International student from the Philippines. I came in Canada just last January to study Software Engineering Technician in Centennial College. Back home, I have my bachelors in Electronics Engineering and work in one of Global Fortune 500 list company',
      eMail: 'aalmario@my.centennialcollege.ca' 
    }
  );
});

module.exports = router;