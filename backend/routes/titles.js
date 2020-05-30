const router = require('express').Router()
let Title = require('../models/titles.model')

router.get('/', function(req, res) {
  Title.find(function(err, titles) {
    res.json(titles);
  })
})

router.get('/titles/:id', function(req, res) {
  Title.findById(req.params.id, function(err, article) {
    if (!title) {
      res.status(404).send('no result found');
    } else {
      res.json(article);
    }
  })
})

router.post('/titles', function(req, res) {
  let title = new Title(req.body);
  title.save()
    .then(title => {
      res.send(title);
    })
    .catch(function(err) {
      res.status(422).send('title add failed')
    })
})

router.patch('/titles/:id', function(req, res) {
  Title.findByIdAndUpdate(req.params.id, req.body)
    .then(function() {
      res.json('title updated')
    })
    .catch(function(err) {
      res.status(422).send('title update failed')
    })
})

router.delete('/titles/:id', function(req, res) {
  Title.findById(req.params.id, function(err, article) {
    if (!title) {
      res.status(404).send('title not found');
    } else {
      Title.findByIdAndRemove(req.params.id)
        .then(function() { res.status(200).json('title deleted') })
        .catch(function(err) {
          res.status(400).send('title delete failed')
        })
    }
  })
})
module.exports = router
