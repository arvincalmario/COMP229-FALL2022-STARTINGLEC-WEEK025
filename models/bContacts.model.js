let mongoose = require('mongoose');

// Create a model class
let bContactsModel = mongoose.Schema(
    {
        contactName: String,
        contactNumber: String,
        eMail: String,
    },
    {
        collection: "businessContacts"
    }
);

module.exports = mongoose.model('bContacts', bContactsModel);