const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 4000

let Todo = require('./todo.model')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log('mongo db connection established successfully')
})

app.use(cors())
app.use(bodyParser.json())

app.listen(PORT, function() {
    console.log('server running on port: ' + PORT)
})

const todoRoutes = express.Router();

app.use('/todos', todoRoutes)

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err)
        } else {
            res.json(todos);
        }
    })
})

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todos.findById(id, function(err, todo) {
        res.json(todo);
    })
})

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'})
        })
        .catch(err => {
            res.status(400).send('adding todo failed')
        })
})

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todoDescription = req.body.todoDescription;
            todo.todoResponsible = req.body.todoResponsible;
            todo.todoPriority = req.body.todoPriority;
            todo.todoCompleted = req.body.todoCompleted;

            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});