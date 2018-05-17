//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb server', err);
    }
    console.log('connected to mongodb server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5afdd519e9625f94f1ead72e')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5afb4c73827a747384d52080')
    }, {
        $inc: {
            age: 1
        },
        $set: {
            name: 'barney'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.close();
});
