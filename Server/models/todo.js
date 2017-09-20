const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    subject:{
        type: String,
        require: true
    },
    complitiondate:{
        type: Date
    },
    isCompleted:{
        type: Boolean
    }
});

const Todo = module.exports = mongoose.model('Todo',TodoSchema);