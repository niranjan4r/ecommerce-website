import express from 'express'
import session from 'express-session'
import config from './config'
import mongoose from 'mongoose'
import userRoute from './routes/userRoute'
import { ensureAuthenticated } from './authentication/auth'
const _mongodbUrl = config.MONGODB_URL
const _mongoDBName = config.DB_NAME
import passport from 'passport'
require('./authentication/passport')

const app = express()
app.use(express.urlencoded({extended:false}));
connectMongo(_mongodbUrl,_mongoDBName);
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


//HELPER FUNCTIONS

function connectMongo(mongodbUrl,mongoDBName){
     
    mongoose.connection.once('open',()=>console.log("successfully connected to DB"))
    mongoose.connection.on('error', err => {
        console.log(err);
      });

      mongoose.connect(mongodbUrl+mongoDBName, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}