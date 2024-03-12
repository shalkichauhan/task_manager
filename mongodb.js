// create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://127.0.0.1:27017'
const ObjectID = mongodb.ObjectId
//insert/create

const databaseName = "task-manager"
const id = new ObjectID()
//console.log(id)
//console.log(id.getTimestamp())
MongoClient.connect(url, {useNewUrlParser: true}, (error, client) => {

    if (error) {
        return console.log('failure to connect to the server')
    }
    const db = client.db(databaseName)
    db.collection('users').insertMany([{
        name: "meeenu",
        age: 40
    },
        {
            school: "home",
            city: "Sydney"
        }], (error, result) => {
        if (error) {
            return console.log(" not successful")
        }

        console.log(" here is my result", result.ops)
    })
})
//Find

// MongoClient.connect(url, {useNewUrlParser: true}, (error, client) => {
//     if (error) {
//
//         return console.log(" unable to conect")
//     }
//     const db = client.db(databaseName)
//     db.collection('users').findOne({name: 'shalki'}, (error, response) => {
//         if (error) {
//             return console.log("cannot fetch the data")
//         }
//         console.log(response)
//     })
// })
//Update
// MongoClient.connect(url, {useNewUrlParser: true}, (error, client) => {
//     if (error) {
//         return console.log(" unable to connect")
//     }
//updateOne

// const db = client.db(databaseName)
// const my_promise = db.collection('users').updateOne(
//     {_id: new ObjectID('65e528d3c9fa962dea5a9e45')},
//     {
//         $set:
//             {name: 'huggzy'}
//     })
//
// updateMany

//     const db = client.db(databaseName)
//     const my_promise = db.collection('users').updateMany(
//         {age: 23},
//         {
//             $set:
//                 {name: 'blackpen'}
//         })
//
//     my_promise.then((client) => {
//         console.log(client)
//     }).catch((error) => {
//         console.log(error)
//     })
// })

//delete

// MongoClient.connect(url, {useNewUrlParser: true}, (error, client) => {
//     if (error) {
//         return console.log("...")
//     }
//
//     const db = client.db(databaseName)
//     db.collection('users').deleteMany({
//         name: 'blackpen'
//     }).then((result) => {
//         console.log(" success", result)
//     }).catch((error) => {
//         console.log(" not successful ", error)
//     })
// })

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
        console.log("unable to connect")
    }
    const db = client.db(databaseName)
    db.collection('task').deleteOne({
        school: 'Macquarie'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {

        console.log(error)
    })
})