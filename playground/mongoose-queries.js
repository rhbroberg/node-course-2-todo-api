const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

// var id = '5b020347ad13287e746203b11';

// if (!ObjectID.isValid(id)) {
//     console.log('id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('id not found');
//     }
//     console.log('todo by id', todo);
// }).catch((e) => console.log(e));

const { User } = require('./../server/models/user');
var userId = '5afe1044630ed53f3c783e40';

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('user not found ', userId);
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(`invalid userId \'${userId}\'`));
