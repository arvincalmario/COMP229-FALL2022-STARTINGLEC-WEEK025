// create a reference to the model
let bContacts = require('../models/bContacts.model');

exports.bContactList = function(req, res, next) {  
    
    bContacts.find((err, bContactList) => {
        // console.log(bContactList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('businesscontacts/list', {
                title: 'Business Contacts', 
                bCList: bContactList
            })            
        }
    });
}


exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    bContacts.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('businesscontacts/add_edit', {
                title: 'Edit Contact Information', 
                item: itemToEdit
            })
        }
    });
}


exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = bContacts({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        eMail: req.body.eMail,
    });

    bContacts.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            console.log(req.body);
            // refresh list
            res.redirect('/businesscontacts/list');
        }
    });
}


exports.displayAddPage = (req, res, next) => {
    let newItem = bContacts();

    res.render('businesscontacts/add_edit', {
        title: 'Add contact',
        item: newItem
    })          
}

exports.processAddPage = (req, res, next) => {
    let newItem = bContacts({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        eMail: req.body.eMail,
    });

    bContacts.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh list
            console.log(item);
            res.redirect('/businesscontacts/list');
        }
    });

}



exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    bContacts.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh list
            res.redirect('/businesscontacts/list');
        }
    });
}