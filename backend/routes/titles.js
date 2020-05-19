const router = require('express').Router()
let Title = require('../models/titles.model')

router.route('/').get((req, res) => {
    Title.find()
        .then(titles => res.json(titles))
        .catch(err => res.status(400).json('error: ' + err))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const year = Number(req.body.year)
    const date = Date.parse(req.body.date)

    const newTitle = new Title({
        username,
        description,
        year,
        date,
    })
    newTitle.save()
        .then(() => res.json('title added'))
        .catch(err => res.status(400).json('error: ' + err))
})

router.route('/:id').get((req, res) => {
    Title.findById(req.params.id)
      .then(titles => res.json(titles))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    Title.findByIdAndDelete(req.params.id)
      .then(() => res.json('title deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    Title.findById(req.params.id)
      .then(titles => {
        titles.username = req.body.username;
        titles.description = req.body.description;
        titles.year = Number(req.body.year);
        titles.date = Date.parse(req.body.date);
  
        titles.save()
          .then(() => res.json('titles updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router