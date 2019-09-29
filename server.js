const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

// app.get(path, callback); show index
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/shows', (req, res) => {
    db.collection('shows').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to db')
        res.redirect('/')
    })
})

const uri = process.env.uri
const client = new MongoClient(uri, { useNewUrlParser: true });

var db

client.connect(err => {
  //  if (err) return console.log(err)
    db = client.db('shows')
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
  client.close();
});