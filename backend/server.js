const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true})

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('mongo db connection established')
})

const titleRouter = require('./routes/titles')
const usersRouter = require('./routes/users')

app.use('/titles', titleRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`server is running: ${port}`)
})