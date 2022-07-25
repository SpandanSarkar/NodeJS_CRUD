const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

// posting for tasks
// app.post('/tasks', (req, res) => {
//     // console.log(req.body) 
//     // res.send('testing')

//     // here is the key  
//     const task = new Task(req.body)

//     task.save().then(() => {
//         res.status(201).send(task)
//     }).catch((error) => {
//         res.status(400)
//         res.send(error)

//         // or
//         // res.status(400).send(error)
//     })
// })

// making it aysnc
router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try{
        await task.save()
        res.status(201).send(task)
    }catch(error){
        res.status(400).send(error)
    }
})



// get individual tasks by id
// app.get('/tasks', (req, res) => {
//     Task.find({}).then((tasks) => {
//         res.send(tasks)
//     }).catch((error) => {
//         res.status(500).send()
//     })
// })
// making it aysnc
router.get('/tasks', async (req, res) => {
    try{
        const tasks = await Task.find({})
        res.send(tasks)
    }catch(error){
        res.status(500).send()
    }
})



//get task by id
// app.get('/tasks/:id', (req, res) =>{
//     const _id = req.params.id
//     Task.findById(_id).then((task) => {
//         if(!task){
//             return res.status(404).send()
//         }
//         res.send(task)
//     }).catch((error) => {
//         res.status(404).send()
//     })
// })
// making it aysnc
router.get('/tasks/:id', async (req, res) =>{
    const _id = req.params.id

    try{
        const task = await Task.findById(_id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(error){
        res.status(404).send()
    }
})



// updating tasks
router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['completed', 'taskReason', 'description']
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return res.status(400).send({ error: 'Invalid Update!' })
    }

    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body,
             { new: true, runValidators: true })
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(error){
        res.status(400).send(error)
    }

})



// deleting tasks
router.delete('/tasks/:id', async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task){
            return res.status(400).send()
        }

        res.send(task)
    }catch(error){
        res.status(500).send(error)
    }
})

module.exports = router