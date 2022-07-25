const mongoose = require('mongoose')

// importing validator
// const validator = require('validator')

// task-manager-api db name
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true 
})



// defining tasks model in Database
// const tasks = mongoose.model('tasks', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })


// Creating instance of that model User
// const me = new User({
//     name: '   Sunanda Biswas',
//     email: '  sunandabiswas00@gmail.com',
//     password: '    Hello  Sunanda',
//     age: 24
// })


//Creating instance of model tasks
// const task = new tasks({
//     description: 'This is my second task',
// })

// saving the data in Users
// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

// saving the data in tasks
// task.save().then((task) => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })
