import mongoose from 'mongoose'
import validator from 'validator'
const sellerSchema = require('../models/sellerModel').sellerSchema

const NAME = "Product"
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    // TODO: Encrypt password 
    price: {
        type: Number,
        required : true
    },
    manufacturer:{
        type: String,
        required : true
    },
    description:String,
    sellers : [sellerSchema]
})

mongoose.model(NAME,productSchema)
module.exports = {productSchema}