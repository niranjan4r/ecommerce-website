const Product = require('../models/productModel')

async function listProducts() {
    const products = await Product.find({})
    return products
}

async function findProduct(_id) {
    try {
        const product = await Product.findOne({ _id })
        return ({product, error: null})
    } catch (error) {
        return ({product: null, error})
    }
}

async function addProduct(_product) {
    if (_product.name == null || _product.price == null || _product.image == null 
        || _product.manufacturer == null || _product.description == null) {
        return null
    }
    const product = new Product({
        name: _product.name,
        price: _product.price,
        image: _product.image,
        manufacturer: _product.manufacturer,
        description: _product.description,
        rating: _product.rating,
        numReviews: _product.numReviews
    })
    try {
        const newProduct = await product.save()
        return ({product: newProduct, error: null})
    } catch (error) {
        return ({product: null, error})
    }
}

async function deleteProduct(_id) {
    
    try {
        const deletedProduct = await Product.findOne({ _id });
        if (deletedProduct) {
            await Product.deleteOne({ _id });
            return ({status: true, error: null})
        } 
        return ({status: false, error: 'Product not found'})
    } catch (error) {
        return ({status: false, error})
    }
}

module.exports = {listProducts, addProduct, findProduct, deleteProduct}