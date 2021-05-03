const express = require("express");
const router = express.Router();
const Title = require("../models/title");

router.get("/titles", (req, res) => {
  Title.find(function (err, titles) {
    res.json(titles);
  });
});

router.get("/titles/:id", (req, res) => {
  Title.findById(req.params.id, function (err, title) {
    if (!title) {
      res.status(404).send("no result found");
    } else {
      res.json(title);
    }
  });
});

router.post("/titles", (req, res) => {
  let title = new Title(req.body);
  title
    .save()
    .then((title) => {
      res.send(title);
    })
    .catch(function (err) {
      res.status(422).send("title add failed");
    });
});

router.patch('/titles/:id', (req, res) => {
    Title.findByIdAndUpdate(req.params.id, req.body)
        .then(function() {
            res.json('title updated')
        })
        .catch(function(err) {
            res.status(422).send('title update failed')
        })
})

router.delete('/titles/:id', (req, res) => {
    Title.findById(req.params.id, (err, title) => {
        if (!title) {
            res.status(404).send('title not found')
        } else {
            Title.findByIdAndRemoove(req.params.id)
                .then(function() {res.status(200).json('title deleted')})
                .catch(function(err) {
                    res.status(400).send('title delete failed')
                })
        }
    })
})

module.exports = router