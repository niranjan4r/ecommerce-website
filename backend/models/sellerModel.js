import mongoose from 'mongoose'
import validator from 'validator'


const NAME = "Seller"
const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    pincodes : [Number],
    description:String
})

mongoose.model(NAME,sellerSchema)
module.exports = {sellerSchema}