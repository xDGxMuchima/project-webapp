const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please provide email']
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    },
    fullname: {
        type: String,
        required: [true, 'Please provide fullname']
    },
    birthday: {
        type: String,
        required: [true, 'Please provide birthday']
    },
    address: {
        type: String,
        required: [true, 'Please provide address']
    },
    tel: {
        type: String,
        required: [true, 'Please provide tel']
    },
    username: {
        type: String,
        required: [true, 'Please provide username']
    }
    
    
})

UserSchema.pre('save', function (next) {
    const user = this

    bcrypt.hash(user.password, 10).then(hash => {
        user.password = hash
        next()
    }).catch(error => {
        console.error(error)
    })
})

const User = mongoose.model('User', UserSchema)
module.exports = User