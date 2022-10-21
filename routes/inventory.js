// Student ID: 301225269
// Name: Arvin Almario
// Data: Oct 03, 2022

var express = require('express');
var router = express.Router();

let inventoryController = require('../controllers/inventory.controller')

/* home page response. */
router.get('/', inventoryController.inventory);

module.exports = router;
