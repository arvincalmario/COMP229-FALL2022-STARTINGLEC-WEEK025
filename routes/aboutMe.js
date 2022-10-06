// Student ID: 301225269
// Name: Arvin Almario
// Data: Oct 03, 2022

var express = require('express');
var router = express.Router();

/* About Me response */
router.get('/', function(req, res, next) {
  res.render(
    'aboutMe', 
    { 
      title: 'About Me',
      fullName: 'Arvin Almario',
      nickName: 'Bino',
      gender:'Male',
      dateOfBirth: 'January 1 1945',
      religion: 'Roman Catholic',
      nationality: 'Filipino',
      hobbies: 'Playing video games and travelling when possible', 
      address: 'Scarborough, Ontario, CA',
      descriptionOfMe: 'I am an International student from the Philippines. I came to Canada last year to study Software Engineering Technician in Centennial College. Back home, I have my bachelors in Electronics Engineering and work in one of Global Fortune 500 list company',

    }
  );
});

module.exports = router;