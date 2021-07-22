import mongoose from 'mongoose'
// const sellerSchema = require('../models/sellerModel').sellerSchema

const NAME = "Product"
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    manufacturer: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        default: 0,
        required: true
    },
    numReviews: {
        type: Number,
        default: 0,
        required: true
    }
})

const productModel = mongoose.model(NAME, productSchema)
module.exports = productModel