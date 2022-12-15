const express = require("express");
const bodyParser = require('body-parser');
const axios = require("axios");
const CircularJSON = require("circular-json");
const request = require("request")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

let urls = "";

// simple api
app.get("/Hello", (req, res) => {
  urls = "http://3.37.42.249:3000/Hello";
  request(urls, { json: true }, (err, result, body) => {
      if (err) { return console.log(err); }
      res.send(CircularJSON.stringify(body))
  })
});

// request param X, response O
app.get("/api/users", (req, res) => {
    axios
        .get('http://3.37.42.249:3000/api/users')
        .then(result => {
            res.send(CircularJSON.stringify(result.data))
        })
        .catch(error => {
            console.error(error)
        })
});

// Query param, request param O, response O
app.get("/api/users/user", (req, res) => {
    if (req.query.name == null) {
        urls = "http://3.37.42.249:3000/api/users/user?user_id="+req.query.user_id;
    } else {           
        urls = "http://3.37.42.249:3000/api/users/user?user_id="+req.query.user_id+"&name="+req.query.name;
    }
    request(urls, { json: true }, (err, result, body) => {
      if (err) { return console.log(err); }
      res.send(CircularJSON.stringify(body))
    })    
});

// Path param, request param O, response O
app.get("/api/users/:user_id", (req, res) => {
  urls = "http://3.37.42.249:3000/api/users/"+req.params.user_id;
  request(urls, { json: true }, (err, result, body) => {
      if (err) { return console.log(err); }
      res.send(CircularJSON.stringify(body))
  })
});

// post, request body, response O
app.post("/api/users/userBody", (req, res) => {
    const options = {
        uri : 'http://3.37.42.249:3000/api/users/userBody',
        method : 'POST',
        form : { id: req.body.id }
    }
    request.post(options, (err, result, body) => {
        if (err) { return console.log(err); }
        res.send(CircularJSON.stringify(body))
    })
});

// post, request body, response O
app.post("/api/users/add", (req, res) => {
    const options = {
        uri : 'http://3.37.42.249:3000/api/users/add',
        method : 'POST',
        form : { 
            id: req.body.id,
            name : req.body.name
        }
    }
    request.post(options, (err, result, body) => {
        if (err) { return console.log(err); }
        res.send(CircularJSON.stringify(body))
    })
});

// put, request body, response O
app.put("/api/users/update", (req, res) => {
    const options = {
        uri : 'http://3.37.42.249:3000/api/users/update',
        method : 'PUT',
        form : { 
            id: req.body.id,
            name : req.body.name
        }
    }
    request.put(options, (err, result, body) => {
        if (err) { return console.log(err); }
        res.send(CircularJSON.stringify(body))
    })
});

// patch, request body, response O
app.patch("/api/user/update/:user_id", (req, res) => {
    const options = {
        uri : 'http://3.37.42.249:3000/api/user/update/'+req.params.user_id,
        method : 'PATCH',
        form : { 
            id: req.body.id,
            name : req.body.name
        }
    }
    request.patch(options, (err, result, body) => {
        if (err) { return console.log(err); }
        res.send(CircularJSON.stringify(body))
    })
});

// delete, request body, response O
app.delete("/api/user/delete", (req, res) => {
    const options = {
        uri : 'http://3.37.42.249:3000/api/user/delete',
        method : 'DELETE',
        form : { user_id: req.body.user_id }
    }
    request.delete(options, (err, result, body) => {
        if (err) { return console.log(err); }
        res.send(CircularJSON.stringify(body))
    })
});

module.exports = app;