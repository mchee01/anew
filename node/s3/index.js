const express   = require('express');
const app       = express();
const fs        = require('fs');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/main'));

// Port setting
var port = 3000;
app.listen(port, function(){
  var dir = './uploadedFiles';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  console.log('server on! http://localhost:'+port);
});
