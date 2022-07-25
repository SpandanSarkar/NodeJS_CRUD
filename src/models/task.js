const mongoose = require('mongoose')

// importing validator
//const validator = require('validator')


// defining tasks model in Database
// The name of this const has to match with the export module at the end
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    taskReason: {
        type: String,
        trim: true,
        default: " ",
        required: true
    }
})

module.exports = Task