const router = require('express').Router()
let Title = require('../models/title.model')

router.route('/').get((req, res) => {
    Title.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400))
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const title = req.body.title

    const newTitle = new Title({
        username,
        title
    })

    newTitle.save()
    .then(() => res.json('title added'))
    .catch(err => res.status(400).json('err: '+ err))
})

router.route('/:id').get((req, res) => {
    Title.findById(req.param.id)
        .then(title => res.json(title))
        .catch(err => res.status(400).json('err: ' + err))
})

router.route('/:id').delete((req, res) => {
    Title.findByIdAndDelete(req.params.id) 
        .then(() => res.json('title delete'))
        .catch(err => res.status(400).json('err: ' + err))
})

router.route('/update/:id').post((req, res) => {
    Title.findById(req.params.id)
        .then(title => {
            title.username = req.body.username;
            title.title = req.body.title

            title.save()
                .then(() => res.json('title update'))
                .catch(err => res.status(400).json('err: ' + err))
        })
        .catch(err => res.status(400).json('error: ' + err))
})

module.exports = router