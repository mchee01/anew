const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

// define schema
var userSchema = mongoose.Schema({
    userid : String,
    name : String,
    city : String,
    sex : String,
    age : Number
})

// create model with mongodb collection and schema
var User = mongoose.model('users', userSchema);

// list
router.get('/list', function(req, res, next) {
    User.find({}, {'_id':0}).exec(function(err, docs) {
        if(err) console.log('err')
        console.log(docs)
        res.writeHead(200);
        var template = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Result</title>
            <meta charset="utf-8">
        </head>
        <body>
            <table border="1" margin: auto; text-align : center;>
            <tr>
                <th>userid</th>
                <th>name</th>
                <th>city</th>
                <th>sex</th>
                <th>age</th>
            </tr>
            `;
            for(var i=0; i<docs.length; i++) {
                template += `
                <tr>
                    <th>${docs[i]['userid']}</th>
                    <th>${docs[i]['name']}</th>
                    <th>${docs[i]['city']}</th>
                    <th>${docs[i]['sex']}</th>
                    <th>${docs[i]['age']}</th>   
                </tr>
                `;
            }
            template += `
            </table>
        </body>
        </html>
        `;
        res.end(template)
    })
})

// get
router.get('/get_userid', function(req, res, next) {
    var input = req.query.input
    User.findOne({'userid': input}, {'_id':0}).exec(function(err,docs) {
        if(err) console.log('err')
        console.log(docs)
        res.writeHead(200);
        var template = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Result</title>
            <meta charset="utf-8">
        </head>
        <body>
            <table border="1" margin: auto; text-align : center;>
            <tr>
                <th>userid</th>
                <th>name</th>
                <th>city</th>
                <th>sex</th>
                <th>age</th>
            </tr>
            <tr>
                <th>${docs['userid']}</th>
                <th>${docs['name']}</th>
                <th>${docs['city']}</th>
                <th>${docs['sex']}</th>
                <th>${docs['age']}</th>   
            </tr>
        </table>
        </body>
        </html>
        `;
        res.end(template)
    })
})

// get
router.get('/get_city', function(req, res, next) {
    var input = req.query.input
    User.find({'city': input}, {'_id':0}).exec(function(err,docs) {
        if(err) console.log('err')
        console.log(docs)
        res.writeHead(200);
        var template = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Result</title>
            <meta charset="utf-8">
        </head>
        <body>
            <table border="1" margin: auto; text-align : center;>
            <tr>
                <th>userid</th>
                <th>name</th>
                <th>city</th>
                <th>sex</th>
                <th>age</th>
            </tr>
            `;
            for(var i=0; i<docs.length; i++) {
                template += `
                <tr>
                    <th>${docs[i]['userid']}</th>
                    <th>${docs[i]['name']}</th>
                    <th>${docs[i]['city']}</th>
                    <th>${docs[i]['sex']}</th>
                    <th>${docs[i]['age']}</th>   
                </tr>
                `;
            }
            template += `
            </table>
        </body>
        </html>
        `;
        res.end(template)
    })
})

//post
router.post('/post_list', function(req, res, next) {
    var input = req.body.input
    User.find({'userid': input}, {'_id':0}).exec(function(err,docs) {
        if(err) console.log('err')
        console.log(docs)
        res.send(docs)
    })
})

module.exports = router;

// select * from users
User.find({},{'_id':0}).exec(function (err, users) {
    if (err) console.log(err);
    console.log("\nQuery 1");
    console.log(users+"\n");
    return;
}) 