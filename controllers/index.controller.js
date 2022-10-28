//business logic of the application

exports.home = function(req, res, next) {
    res.render(
      'home', 
      { 
        title: 'Home', 
        mission: 'to provide out of the box ideas that gives my clients advantage to their business competitors.',
        vision: 'to create a better everyday life for many people.', 
        userName: req.user ? req.user.username : ''
      }
    );
  };

exports.aboutMe = function(req, res, next) {
    res.render(
      'aboutMe', 
      { 
        
        title: 'About Me',
        fullName: 'Arvin C. Almario',
        nickName: 'Bino',
        gender:'Male',
        dateOfBirth: 'January 1 1945',
        religion: 'Roman Catholic',
        nationality: 'Filipino',
        hobbies: 'Playing video games and travelling when possible', 
        address: 'Scarborough, Ontario, CA',
        descriptionOfMe: 'I am an International student from the Philippines. I came to Canada last year to study Software Engineering Technician in Centennial College. Back home, I have my bachelors in Electronics Engineering and work in one of Global Fortune 500 list company',
        userName: req.user ? req.user.username : ''
  
      }
    );
  };

  exports.projects = function(req, res, next) {
    res.render(
      'projects', 
      { 
        title: 'Projects',
        caption: 'some of my on-going projects to learn different programming languages',
        userName: req.user ? req.user.username : ''
      }
    );
  };

  exports.services = function(req, res, next) {
    res.render(
      'services', 
      { 
        title: 'Services',
        serviceA: 'I build websites based on clients preference, and modify a bit to fit their personality. Click the link to see some of the creative website i can create. (note: this is not mine, only for homework purposes. credits to the owner of that page.)',
        serviceB: 'I build mobile applications from scratch, or create a mobile app based on an already built website of a client.',
        serviceC: 'I build database structure to cater clients data bank.',
        userName: req.user ? req.user.username : ''

      }
    );
  };

  exports.contact = function(req, res, next) {
    res.render(
      'contact', 
      { 
        title: 'Contact', 
        phone: '+63 919-3033871',
        mobile: '+1 989-23090',
        email: 'aalmario@my.centennialcollege.ca',
        userName: req.user ? req.user.username : ''
      }
    );
  };

  
  
