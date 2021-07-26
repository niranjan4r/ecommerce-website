const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
// import User from '../models/userModel'
const User = require('../controllers/userController')
const passport  = require('passport')
const passwordHelper = require('../controllers/userController')

passport.use(
    new LocalStrategy({ usernameField: 'email', passwordField: 'password' },async (email, password, done) => {
        // Match User
        
        const user = await User.checkUser({email:email})
        if(user == null) return done(null,false,{message:'User doesnt exist!! pls register'})
        const passwordCheck = await comparePassword(user.password, password) 
        console.log(user,email,password,passwordCheck)
        if( passwordCheck == true) 
            return done(null, user)
        else return done(null, false, { message: 'Email or password is incorrect' })
    })
)

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async(id, done) => {
    const user = await User.checkId(id)
    if(user) done(null,user)
})

async function comparePassword(hashedPassword,password){
    const result = await bcrypt.compare(password,hashedPassword);
    return result
}