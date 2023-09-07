require('dotenv').config()
const data = require('./models/data')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080 
const connectDB = require('./config')
connectDB()
const seedRoutes = require('./routes/seedRoutes')
const productRoutes = require('./routes/productRoutes')
app.use(express.json())
app.use(cors())

app.use('/api/seed', seedRoutes )
app.use('/api/products', productRoutes)


app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})