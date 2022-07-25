require('../db/mongoose')
const Task = require('../models/task')

// Task.findByIdAndDelete('62dcbf59e27d530676a30b48').then((task) => {
//     console.log(task)
//     // return the next 
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const task2 = Task.countDocuments({ completed })
    return task2 
}

deleteTaskAndCount('62d8d18be0c2940c7de36cb5', true).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})