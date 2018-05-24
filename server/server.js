var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose'); // eslint-disable-line no-unused-vars
var { Todo } = require('./models/todo');
// var { User } = require('./models/user');
const { ObjectID } = require('mongodb');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET /todos/12345
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.sendStatus(404);
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.sendStatus(404);
        }
        res.status(200).send({ todo });
    }).catch(() => {
        res.sendStatus(400);
    });

});

app.listen(3000, () => {
    console.log('started on port 3000');
});

module.exports = { app };
