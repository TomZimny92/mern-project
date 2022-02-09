const express = require('express')
//const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')


// Environment configuration
require('dotenv').config();

// The Server
const app = express()
const port = process.env.PORT || 5000

// The Middleware to parse JSON
app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI // database uri from MongoDB Atlas
mongoose.connect(uri, {})
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

// Starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})