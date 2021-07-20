import express from 'express'
import session from 'express-session'
import config from './config'
import mongoose from 'mongoose'
import userRoute from './routes/userRoute'
import { ensureAuthenticated } from './authentication/auth'

import passport from 'passport'
require('./authentication/passport')(passport)

const mongodbUrl = config.MONGODB_URL
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected!'))
.catch(error => console.log(error.reason))

const app = express()

// Express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())
app.use('/api/users', userRoute)

app.get('/api/products', (req, res) => {
    res.send('TODO - Product details')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT)
})