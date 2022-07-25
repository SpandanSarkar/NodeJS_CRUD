const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

// parsing incoming JSON
app.use(express.json())
// this one line, it's going to automatically parse incoming JSON to an object so that we can access it in our request handlers 

//grabing incoming body data
// this is called route handler

// app.post('/users', (req, res) => {
//     // console.log(req.body) 
//     // res.send('testing')

//     // here is the key  
//     const user = new User(req.body)

//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((error) => {
//         res.status(400)
//         res.send(error)

//         // or
//         // res.status(400).send(error)
//     })
// })

// making it aysnc function

app.post('/users', async (req, res) => {
    const user = new User(req.body)  
    try{
        await user.save()
        res.status(201).send(user)
    }catch(error){
        res.status(400).send(error)
    }
})




// reading data for Users (get request)
// all users
// app.get('/users', (req, res) => {
//     User.find({}).then((users) => {
//         res.send(users)
//     }).catch((error) => {
//         res.status(500).send()
//     })
// })

// making it async

app.get('/users', async (req, res) => {
    try{
        const users = await User.find({})
        res.send(users)
    }catch(error){
        res.status(500).send()
    }
})



// get individual users by id
// app.get('/users/:id', (req, res) => {
//     const _id = req.params.id

//     // console.log(req.params)
//     // we can use findOne() to find using any Document (column) value
//     // we can use findById() to find using id

//     User.findById(_id).then((user) => {
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)
//     }).catch((error) => {
//         res.status(500).send()
//     })
// })

// making it aysnc
app.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(error){
        res.status(500).send()
    }
})






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
app.post('/tasks', async (req, res) => {
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
app.get('/tasks', async (req, res) => {
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
app.get('/tasks/:id', async (req, res) =>{
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

// updating users
app.patch('/users/:id', async (req, res) => {

    //error handling for update issue
    // very important for future
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if(!isValidOperation){
        return res.status(400).send({ error: 'Invalid Update!' })
    }

    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body,
             { new: true, runValidators: true })
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(error){
        res.status(400).send(error)
    }
})

// updating tasks
app.patch('/tasks/:id', async (req, res) => {
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


// deleting users 
app.delete('/users/:id', async (req, res) => {
    // req.param.id will fetch the id
    try{
        const user = await User.findByIdAndDelete(req.params.id)

        if(!user){
            return res.status(404).send()
        }

        res.send(user)
    }catch(error){
        res.status(500).send(error)
    }
})

// deleting tasks
app.delete('/tasks/:id', async (req, res) => {
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

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})