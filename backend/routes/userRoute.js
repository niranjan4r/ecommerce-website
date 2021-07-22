import express from 'express'
// import User from '../models/userModel'
import bcrypt from 'bcrypt'
const passport = require('passport')
const User = require('../controllers/userController')

const router = express.Router()

router.use(express.json())

router.post('/login', passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: '/login'
}))
    
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('connect.sid')
        res.redirect('/login')
    })
})

router.post('/signup', async(req, res) => {
    console.log(req.body)
    const user = await User.createUser(req.body,false)
    console.log(user)
    const { name, email, password } = req.body
    res.send(user)
})

router.get('/createadmin', async (req, res) =>{
    console.log(req.body)
    const user = await User.createUser(req.body,true)
    console.log(user)
    const { name, email, password } = req.body
    res.send(user)
})

export default router