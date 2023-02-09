const mongoose = require('mongoose');

const TaskSchema= new  mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    due_date:{
        type: Date,
        required: true,
    },
    priority_level:{
        type: Number,
        required: true,
    },


});

const Task = mongoose.model('Tasks', TaskSchema);

module.exports = Task;