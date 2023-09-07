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
const userRoutes = require('./routes/userRoutes')

const { authorize } = require('./middleware/authMiddleware')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/seed', seedRoutes )
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)


app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})


app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})