//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb server', err);
    }
    console.log('connected to mongodb server');
    console.log(ObjectID);
    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false

    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // insert new doc into Users (name, age, location-string)

    // db.collection('Users').insertOne({
    //     name: 'rhb',
    //     age: 49,
    //     location: '02482'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert into Users', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});
