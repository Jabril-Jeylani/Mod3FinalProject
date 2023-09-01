require('dotenv').config()
const data = require('./models/data')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080 
const connectDB = require('./config')
connectDB()
app.use(express.json())
app.use(cors())

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.products.find((x) => x.slug === req.params.slug);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})