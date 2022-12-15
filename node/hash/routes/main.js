const express = require("express");
const app = express();

// simple api
app.get("/Hello", (req, res) => {
  res.send("Hello World!!");
});

// make hash key
app.get("/gethash",  (req, res) => { 
  let hash = Math.random().toString(36).slice(2);
  console.log(hash)
  res.send(hash)
});

module.exports = app;