// Student ID: 301225269
// Name: Arvin Almario
// Data: Oct 03, 2022

var express = require('express');
var router = express.Router();

let bContactsController = require('../controllers/bContacts.controller')

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

/* GET users listing. */
router.get('/list', bContactsController.bContactList);

// Routers for edit
router.get('/edit/:id', requireAuth, bContactsController.displayEditPage);
router.post('/edit/:id', requireAuth, bContactsController.processEditPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, bContactsController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, bContactsController.processAddPage);


// Route for Delete
router.get('/delete/:id', requireAuth, bContactsController.performDelete);

module.exports = router;
