const userModel = require('../models/userModel')
const mongoose = require('mongoose')
const User = mongoose.model('User')

async function createUser(_user,_role){
    console.log(_user.name)
    if (_user.name == null || _user.email == null || _user.password == null){
        return ({user:null,msg:"invalid username or password"})
    }

    // Check if email already used
    const isExistingUser = await User.findOne({
        email: _user.email
    })

    if (isExistingUser){
        return ({user:null,msg:"Existing User"})
    }
    // Creating new user
    try {
        const user = new User({
            name : _user.name,
            email : _user.email,
            password : _user.password,
            role : _role
        })
        // TODO: Hash Password

        const newUser = await user.save()
        return ({user:newUser,msg:"done"})
        
    } catch (error) {
        return ({user:null,msg:error})
    }
}

async function checkUser(query){
    const user = await User.findOne(query)
    return user
}

async function checkId(id){
    const user = await User.findById(id)
    return user
}


module.exports = {createUser,checkUser,checkId}