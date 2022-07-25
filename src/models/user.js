const mongoose = require('mongoose')

// importing validator
const validator = require('validator')

// defining User model in Database
const User = mongoose.model('User', {
    name: {
        type: String,
        //required true means that this field can not be empty
        required: true,
        trim: true 
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password can not contain the word "Password"')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowcase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        //making custom validation
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

//exporting this module so that other module can use it
module.exports = User