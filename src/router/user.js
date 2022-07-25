const express = require('express')
const User = require('../models/user')
const router = new express.Router()
// router.get('/test', (req, res) => {
//     res.send('From new file')
// })

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

// // adding router
// const router = new express.Router()
// router.get('/test', (req, res) => {
//     res.send('This is my other router')
// })
// // using the router
// app.use(router)

// making it aysnc function


router.post('/users', async (req, res) => {
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

router.get('/users', async (req, res) => {
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
router.get('/users/:id', async (req, res) => {
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

// updating users
router.patch('/users/:id', async (req, res) => {

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

// deleting users 
router.delete('/users/:id', async (req, res) => {
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


module.exports = router