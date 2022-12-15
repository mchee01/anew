var express = require("express");
var mysql = require("mysql");
const env =require("dotenv").config({ path:"../../.env" });

var connection = mysql.createConnection({
  host : process.env.host,
  port : process.env.port,
  user : process.env.user,
  password : process.env.password,
  database : process.env.database
})

var app = express();

connection.connect(function(err) {
  if(!err) {
    console.log(process.env.host, "Database is connected...\n\n");
  } else {
    console.log("Error connectiong database...\n\n");
  }
});

app.get('/', function(req, res) {
  connection.query('select * from st_info', function(err, rows, fields) {
    connection.end();
    if(!err) {
      res.send(rows);
      console.log('The solution is : ', rows);
    } else {
      console.log('Error while perfoming Query ');
    }
  })
})

app.listen(8000, function () {
  console.log('8000 Port : Server started...');
})