require('dotenv').config()
const data = require('./data')
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

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})