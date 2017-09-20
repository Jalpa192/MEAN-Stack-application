// import modules
const express = require("express");
const router = express.Router();

const todo = require('../models/Todo');

// get - list
router.get('/todos',(req,res, next)=>{
    todo.find(function(err, todo){
        if(err){
            console.log("error in retiving todo list");
        }
        res.json(todo);
    });
});

// post -- add todo
router.post('/todo',(req,res, next)=>{
    let newtodo = new todo({
        subject : req.body.subject,
        complitiondate : req.body.complitiondate,
        isCompleted : req.body.isCompleted
    });

    newtodo.save((err,newtodo)=>{
        if(err){
            console.log("error in save new todo");
            res.json({status:"error",msg:'Faild to add newtodo'});
        }
        else{
            res.json({status:"success",msg:'newtodo added successfully',data : newtodo});
        }
    })
});

// export use in root js file 
module.exports = router;