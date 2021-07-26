//--------------------------------------------------START OF IMPORTS---------------------------------------------------------
import express from 'express'
import session from 'express-session'
import config from './config'
import mongoose from 'mongoose'
import userRoute from './routes/userRoute'
//--------------------------------------------------START OF IMPORTS---------------------------------------------------------
import productRoute from './routes/productRoute'
import { ensureAuthenticated } from './authentication/auth'
const _mongodbUrl = config.MONGODB_URL
const _mongoDBName = config.DB_NAME
const PORT = process.env.PORT || 5000;
const passport = require('passport')
require('./authentication/passport')
//--------------------------------------------------END OF IMPORTS---------------------------------------------------------

const app = express()

//--------------------------------------------------START OF MIDDLEWARE---------------------------------------------------------
app.use(express.json())
app.use(express.urlencoded({extended:false}));
connectMongo(_mongodbUrl,_mongoDBName);
// Express session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())
//--------------------------------------------------END OF MIDDLEWARE---------------------------------------------------------

//--------------------------------------------------START OF ROUTES---------------------------------------------------------
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
//--------------------------------------------------END OF ROUTES---------------------------------------------------------

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT)
})

//--------------------------------------------------START OF HELPER FUNCTIONS---------------------------------------------------------
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
//--------------------------------------------------END OF MIDDLEWARE---------------------------------------------------------
