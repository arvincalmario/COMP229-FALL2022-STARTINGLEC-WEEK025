// Student ID: 301225269
// Name: Arvin Almario
// Data: Oct 03, 2022

var express = require('express');
var router = express.Router();

let bContactsController = require('../controllers/bContacts.controller')

/* GET users listing. */
router.get('/list', bContactsController.bContactList);


// Routers for edit
router.get('/edit/:id', bContactsController.displayEditPage);
router.post('/edit/:id', bContactsController.processEditPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', bContactsController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', bContactsController.processAddPage);


// Route for Delete
router.get('/delete/:id', bContactsController.performDelete);

module.exports = router;
