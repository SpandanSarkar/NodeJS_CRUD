const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')

const useRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()
const port = process.env.PORT || 3000

// parsing incoming JSON
// this one line, it's going to automatically parse incoming JSON to an object so that we can access it in our request handlers 
app.use(express.json())
app.use(useRouter)
app.use(taskRouter)


//grabing incoming body data
// this is called route handler


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})