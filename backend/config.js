import dotenv from 'dotenv'
dotenv.config()

// TODO: fix deprecationWarning - collection.ensureIndex is deprecated
export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/ecommerce-website'
}