let mongoose = require('mongoose');

// Create a model class
let inventoryModel = mongoose.Schema(
    {
        contactName: String,
        contactNumber: Number,
        eMail: String,
    },
    {
        collection: "businessContacts"
    }
);

module.exports = mongoose.model('Inventory', inventoryModel);