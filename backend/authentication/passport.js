const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
import User from '../models/userModel'



module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, (email, password, done) => {
            // Match User
            User.findOne({ email: email }).exec()
                .then(user => {
                    if (user && user.password === password) {
                        return done(null, user)
                    }
                    else {
                        return done(null, false, { message: 'Email or password is incorrect' })
                    }
                    // Match password - TODO: bcrypt compare
                })
                .catch(err => console.log(err))
        })
    )

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })
}