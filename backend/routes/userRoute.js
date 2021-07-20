import express from 'express'
import User from '../models/userModel'
import bcrypt from 'bcrypt'
import passport from '../authentication/passport'

const router = express.Router()
router.use(express.json())

router.post('/login', async (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    }) (req, res, next);
    

    // const loginUser = await User.findOne({
    //     email: req.body.email,
    //     password: req.body.password
    // })
    // if (loginUser) {
    //     res.send({
    //         _id: loginUser.id,
    //         name: loginUser.name,
    //         email: loginUser.email,
    //         isAdmin: loginUser.isAdmin
    //     })
    // } else {
    //     res.status(401).send({ msg: 'Invalid username or password'})
    // }
})


router.get('/logout', (req, res) => {
    req.logout()
})
router.post('/signup', async(req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body

    // Check required fields
    if (!name || !email || !password)
    {
        res.status(400).send({ msg: 'Invalid username or password'})
    }

    // Check if email already used
    const isExistingUser = await User.findOne({
        email: req.body.email
    })
    if (isExistingUser)
    {
        res.status(400).send({ msg: 'User already exists with the entered email'})
    }
    // Creating new user
    try {
        const user = new User({
            name,
            email,
            password,
            isAdmin: 'false'
        })
        // TODO: Hash Password

        const newUser = await user.save()
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin
        })
    } catch (error) {
        res.send({ msg: error.message })
    }
})

router.get('/createadmin', async (req, res) =>{
    try {
        const user = new User({
            name: 'Nirgo',
            email: 'nirgo@nirgo.com',
            password: '12341234',
            isAdmin: 'true'
        })

        const newUser = await user.save()
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin
        })
    } catch (error) {
        res.send({ msg: error.message })
    }
})

export default router