require('../db/mongoose')
const User = require('../models/user')

// task is change the age of the user and then fetch out the user using the id
// User.findByIdAndUpdate('62d7e8f4f8af1486644ccd27', {age: 30}).then((user) => {
//     console.log(user)
//     // return the next 
//     return User.countDocuments({ age: 30 })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age }) // here  {age = age}
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('62d7e8f4f8af1486644ccd27', 35).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})

