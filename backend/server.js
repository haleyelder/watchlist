const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require("./routes/titles")
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001
const uri = process.env.ATLAS_URI

app.use(cors())
app.use(express.json())
app.use('/api', router)

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('mongo db connection estabalished')
}) 

connection.on('error', () => {
    console.log('connection error: ' + error)
})


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})