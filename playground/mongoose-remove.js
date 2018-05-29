const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');
var userId = '5afe1044630ed53f3c783e40';


// // Todo.remove( {} 
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findByIdAndRemove({ _id: '5b0d8292e9625f94f1f5b47f' }).then((todo) => {
//     console.log(todo);
// });

Todo.findOneAndRemove('5b0d8292e9625f94f1f5b47f').then((todo) => {
    console.log(todo);
});
