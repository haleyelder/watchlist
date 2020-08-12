const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require("dotenv").config();

// connect to mongo
const connectionString = process.env.ATLAS_URI;
const MongoClient = require("mongodb").MongoClient;


MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {

    console.log("connected to db");
    const db = client.db("watchlist");
    const titlesCollection = db.collection("titles");

    app.listen(3000, function () {
      console.log("listening on 3000");
    });

    app.set("view engine", "ejs");

    // middleware, formatting, displaying
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json())
    app.use(express.static('public'))

    // display titles
    app.get("/", (req, res) => {
      db.collection("titles").find().toArray()
        .then((results) => {
          res.render("index.ejs", { titles: results });
        })
        .catch((error) => console.error(error));
    });

    // update titles
    app.put('/titles', (req, res) => {
      titlesCollection.findOneAndUpdate(
        { title: 'legion'},
        {
          $set: {
            title: req.body.title,
            year: req.body.year
          }
        },
        {
          upsert: true
        }
      )
      .then(result => {
        res.json('success')
      })
      .catch(error => console.error(error))
    })

    // add more titles
    app.post("/titles", (req, res) => {
      titlesCollection.insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((error) => console.error(error));
    });

    //delete titles -- NEEDS FIX
    app.delete('/titles', (req, res) => {
      titlesCollection.deleteOne(
        {title: req.body.title}
      )
      .then(result => {
        if (result.deletedCount === 0) {
          return res.json('nothing to delete')
        }
        res.json('deleted fifth element')
      })
      .catch(error => console.error(error))
    })
  })

  .catch((error) => console.error(error));

// const cors = require('cors')
// const mongoose = require('mongoose')

// const titleRouter = require('./routes/titles')
// const usersRouter = require('./routes/users')

// app.use('/titles', titleRouter)
// app.use('/users', usersRouter)
