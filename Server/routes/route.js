// import modules
const express = require("express");
const router = express.Router();

const Contact = require('../models/contacts');

// get - list
router.get('/contacts',(req,res, next)=>{
    Contact.find(function(err, contacts){
        if(err){
            console.log("error in retiving contact list");
        }
        res.json(contacts);
    });
});

// post -- add contact
router.post('/contact',(req,res, next)=>{
    let newContact = new Contact({
        first_name :req.body.first_name,
        last_name:req.body.last_name,
        contact_number: req.body.contact_number
    });

    newContact.save((err,contact)=>{
        if(err){
            console.log("error in save contact");
            res.json({status:"error",msg:'Faild to add contact'});
        }
        else{
            res.json({status:"success",msg:'contact added successfully',data : contact});
        }
    })
});

// // put -- update contact
// router.put('/contact',(req,res, next)=>{
//     res.send('put retive contact list');
// });

// delete -- delete contact
router.delete('/contact/:id',(req,res, next)=>{

    console.log(req.params.id);
    Contact.remove({_id:req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
});

module.exports = router;
