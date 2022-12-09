{"filter":false,"title":"app.js","tooltip":"/dataapi/app.js","undoManager":{"mark":1,"position":1,"stack":[[{"start":{"row":0,"column":0},"end":{"row":27,"column":3},"action":"insert","lines":["const express = require('express');","const morgan = require('morgan');","const path = require('path');","const app = express();","const bodyParser = require('body-parser');","const cookieParser = require('cookie-parser');","const router = express.Router();","","// view engine setup","app.set('port', process.env.PORT || 3000)","","app.use(morgan('dev'));","app.use(bodyParser.json());","app.use(bodyParser.urlencoded({ extended: false }));","app.use(cookieParser());","app.use(express.static(path.join(__dirname, 'views')));","","//mongoose configuration","const mongoose = require(\"mongoose\")","mongoose.connect('mongodb://43.201.94.25:27017/mydb')","","// routes setup","var main = require('./routes/main.js');","app.use('/', main);","","app.listen(app.get('port'), () =>{","\tconsole.log('3000 Port : 서버 실행 중')","});"],"id":1}],[{"start":{"row":19,"column":28},"end":{"row":19,"column":40},"action":"remove","lines":["43.201.94.25"],"id":2},{"start":{"row":19,"column":28},"end":{"row":19,"column":41},"action":"insert","lines":["43.201.125.57"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":20,"column":0},"end":{"row":20,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1670565577705,"hash":"40592dbe87156e0ca9ece36d55bdf61632fc1db5"}