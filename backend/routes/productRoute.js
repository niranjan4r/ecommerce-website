import express from 'express'
const Product = require('../controllers/productController')

const router = express.Router()

router.use(express.json())

// List all products
router.get("/", async (req, res) => {
    const products = await Product.listProducts()
    res.send(products)
})

// Describe a product 
router.get('/:id', async (req, res) => {
    const {product, error} = await Product.findProduct(req.params.id)
    if (product)
        res.send(product)
    res.status(404).send({ message: error })
})
// TODO allow only admin to create/delete products
router.post("/", async (req, res) => {
    const {product, error} = await Product.addProduct(req.body)
    if (product) {
        return res.status(201).send({ message: 'New product created', data: product})
    }
    return res.status(500).send({ message: error })

})

router.delete("/:id", async (req, res) => {
    const {status, error} = await Product.deleteProduct(req.params.id)
    if (status)
        return res.send({ message: 'Product successfully deleted' })
    res.status(500).send({ message: error })
})

export default router