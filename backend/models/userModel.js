import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Not a valid email')
            }
        }
    },
    // TODO: Encrypt password 
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    address : {
        line1 : {
            type : String,
            trim : true
        },
        line2 : {
            type : String,
            trim : true
        },
        line3 : {
            type : String,
            trim : true
        },
        pincode:{
            type :Number,
            trim :true,
        }

    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
})

const userModel = mongoose.model('User', userSchema)

module.exports  =  {userModel,userSchema}