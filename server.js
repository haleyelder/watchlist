const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
    console.log('listening on 3000')
})

// app.get(path, callback); show index
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/shows', (req, res) => {
    console.log(req.body)
})