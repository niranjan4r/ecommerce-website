const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
// import User from '../models/userModel'
const User = require('../controllers/userController')
const passport  = require('passport')

passport.use(
    new LocalStrategy({ usernameField: 'email', passwordField: 'password' },async (email, password, done) => {
        // Match User
        const user = await User.checkUser({email:email})
        if(user.password === password) return done(null,user)
        else return done(null, false, { message: 'Email or password is incorrect' })
        // User.findOne({ email: email }).exec()
        //     .then(user => {
        //         if (user && user.password === password) {
        //             return done(null, user)
        //         }
        //         else {
        //             return done(null, false, { message: 'Email or password is incorrect' })
        //         }
        //         // Match password - TODO: bcrypt compare
        //     })
        //     .catch(err => console.log(err))
    })
)

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async(id, done) => {
    const user = await User.checkId(id)
    if(user) done(null,user)
})
