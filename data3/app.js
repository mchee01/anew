const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();

// view engine setup
app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));

//mongoose configuration
const mongoose = require("mongoose")
mongoose.connect('mongodb://43.201.125.57:27017/mydb')

// routes setup
var main = require('./routes/main.js');
app.use('/', main);

app.listen(app.get('port'), () =>{
	console.log('3000 Port : 서버 실행 중')
});