// CRUD
// /Users/alifelahi/mongodb/bin/mongod --dbpath=/Users/alifelahi/mongodb-data

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

//shorthand
const {MongoClient, ObjectID} = require('mongodb')

const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

// console.log(id.id)
// console.log(id.id.length)
// console.log("-------")
// console.log(id.toHexString())
// console.log(id.toHexString().length)

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to the Database')
    }
    
    // no need to create manually in other place to create the Database
    const db = client.db(databaseName)

    // insertOne is a asyn method
    // we donot even need to add _id manually

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Anik',
    //     age: 26
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to isert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Aditi',
    //         age: 25
    //     },
    //     {
    //         name: 'Rafi',
    //         age: 24
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }
        
    //     console.log(result.ops)
    // })
    
    //  const newdb = client.db(databaseName)

    // newdb.collection('tasks').insertMany([
    //     {
    //         description: 'practice1',
    //         completed: true
    //     },
    //     {
    //         description: 'practice2',
    //         completed: true
    //     },
    //     {
    //         description: 'practice3',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('You have failed your first test')
    //     }
    //     console.log('You are the BOSS')
    //     console.log(result.ops)
    // })


    // read starts from here
    // finding one document
    // db.collection('users').findOne({_id: new ObjectID("62d5260f2d3e602c4fb76958")}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })
    
    // if we give an object property which does not match, it will not cause any error,
    // it will produce null as that does not exists in DB


    

    // finding many documents

    // db.collection('users').find({ age: 25 }).toArray((error, users) => {
    //     if(error){
    //         return console.log('Unable to fetch users')
    //     }
    //     console.log(users)
    // })


    // db.collection('users').find({ age: 25 }).count((error, count) => {
    //     if(error){
    //         return console.log('Unable to fetch users')
    //     }
    //     console.log(count)
    // })

    // console.log("-----")

    // .find() method returns a cursor 

    // test 2

    // newdb.collection('tasks').findOne({_id: new ObjectID("62d6338200258426aad56300")}, (error, user) => {
    //         console.log('1st one')
    //         if(error){
    //             return console.log('Unable to fetch')
    //         }
    //         console.log(user)
            
    // })

    // newdb.collection('tasks').find({ description: 'practice3' }).toArray((error, users) => {
    //     console.log('2nd one')
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(users)
    // })


    // Update Starts here

    // updateOne()
    // db.collection('users').updateOne(
    //     {
    //         _id: new ObjectID("62d510966254d7c2db8e6e7d")
    //     },
    //     {
    //         $inc: {
    //             age: 5
    //         }
    //     }
    // ).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // updateMany()
    // db.collection('tasks').updateMany({
    //     completed: true
    // },
    // {
    //     $set: {
    //         completed: false
    //     }
    // } 
    // ).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // delete starts here

    // db.collection('users').deleteMany({
    //     age: 25
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // task
    db.collection('tasks').deleteOne({
        _id: new ObjectID("62d5284b435c6e36611861b0")
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // CRUD Completed!! 
    // IF You delete the node_module, then install mongoose, express, and nodemon
})