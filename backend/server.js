const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const titlesRouter = require('./routes/titles')
// const usersRouter = require('./routes/users')


const app = express()
const port = process.env.PORT || 5000

require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use('/titles', titlesRouter)
// app.use('/users', usersRouter)

const uri = process.env.ATLAS_URI

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