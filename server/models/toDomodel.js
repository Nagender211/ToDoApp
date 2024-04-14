const mongoose = require('mongoose');


const mongooseSchma = new mongoose.Schema({
    text:{
        type: String,
        required: true
    }
});

const ToDoModels = mongoose.model('ToDoModels', mongooseSchma);

module.exports = ToDoModels;