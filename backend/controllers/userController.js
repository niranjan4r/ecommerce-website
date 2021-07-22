const userModel = require('../models/userModel')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcrypt')

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
        const hashedPassword = await hashPassword(10,_user.password)
        const user = new User({
            name : _user.name,
            email : _user.email,
            password : hashedPassword,
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
async function hashPassword(saltRounds, password){
    const hashedPassword = await bcrypt.hash(password,saltRounds)
    return hashedPassword
}
async function comparePassword(hashedPassword,password){
    const result = await bcrypt.compare(password,hashedPassword);
    return result
}


module.exports = {createUser,checkUser,checkId,comparePassword}