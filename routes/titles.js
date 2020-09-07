const router = require('express').Router()
let Title = require('../models/title.model')

router.route('/').get((req, res) => {
    Title.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const title = req.body.title
    const year = Number(req.body.year)
    const date = Date.parse(req.body.date)

    const newTitle = new Title({
        username,
        title,
        year,
        date
    })

    newTitle.save()
        .then(() => res.json('title added'))
        .catch(err => res.status(400).json('error: ' + err))
})

router.route('/:id').get((req, res) => {
    Title.findById(req.params.id)
        .then(title => res.json(exercise))
        .catch(err=> res.status(400).json('error: ' + err))
})

router.route('/:id').delete((req, res) => {
    Title.findByIdAndDelete(req.params.id)
        .then(() => res.json('exercise deleted'))
        .catch(err => res.status(400).json('error: ' + err))
})

router.route('/update/:id').post((req, res) => {
    Title.findById(req.params.id)
        .then(title => {
            title.username = req.body.username;
            title.title = req.body.title;
            title.year = Number(req.body.year)
            title.date = Date.parse(req.body.date)

            title.save()
                .then(() => res.json('exercise updated'))
                .catch(err => res.status(400).json('error: ' + err))
        })
        .catch(err => res.status(400).json('error: ' + err))
})

module.exports = router