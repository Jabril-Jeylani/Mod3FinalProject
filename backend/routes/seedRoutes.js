const express = require('express')
const Product = require('../models/productModel')
const data = require('../models/data.js')
const User = require('../models/userModel.js')
const router = express.Router()

router.get('/', async (req, res) => {
    await Product.deleteMany({})
    const createdProducts = await Product.insertMany(data.products)
    await User.deleteMany({})
    const createdUsers = await User.insertMany(data.users)
    res.send({ createdProducts, createdUsers })
})

module.exports = router