//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb server', err);
    }
    console.log('connected to mongodb server');
    console.log(ObjectID);

    // db.collection('Todos').find({
    //     _id: new ObjectID('5afb4b414c4efb7328377cc4')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });

    db.collection('Users').find({ name: 'rhb' }).toArray().then((docs) => {
        console.log('my named docs are');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('bummer - error', err);
    });

    // db.close();
});
