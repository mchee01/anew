const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const request = require("request")
const moment = require("moment")
const dateutil = require("data-utils")
const mongoClient = require("mongodb").MongoClient

let today = new Date().toLocaleDateString('sv').replaceAll('-','');

var keys = 'B%2FNiJnYmkZV1%2FK7ulvZI4MoSXvCTDfNAd0Snw%2Bk6g4%2BbMk1LoGVhd75DJahjv4K35Cr9jh9RX0j%2BM89grKBYsw%3D%3D';
var url = 'http://apis.data.go.kr/1352000/ODMS_COVID_02/callCovid02Api';

var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + keys;
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
queryParams += '&' + encodeURIComponent('apiType') + '=' + encodeURIComponent('JSON');
queryParams += '&' + encodeURIComponent('status_dt') + '=' + encodeURIComponent(today);

// define schema
var DataSchema = mongoose.Schema({
    statusDt : String,
    accExamCnt : Number,
    hPntCnt : Number,
    gPntCnt : Number
})

// create model with mongodb collection and schema
var Data = mongoose.model('coronas', DataSchema);

// getdata
router.get('/getdata', function(req, res, next) {
    request({
            url : url + queryParams,
            method : "GET"
    }, function (error, response, body) {
        Data.find({}).remove().exec();
//        console.log('resultCode', response.resultCode);
//        console.log('Headers', JSON.stringify(response.headers));
        let data = JSON.parse(body);
        console.log(data)

        var statusDt_v  = data['items'][0]['statusDt'];
        var accExamCnt_v  = data['items'][0]['accExamCnt'];
        var hPntCnt_v  = data['items'][0]['hPntCnt'];
        var gPntCnt_v  = data['items'][0]['gPntCnt'];

        var template = `
         <!doctype html>
         <html>
         <head>
          <title>Result</title>
          <meta charset="utf-8">
         </head>
         <body>
          <table border="1" margin: auto; text-align: center;>
             <tr>
              <th> 날 짜 </th>
              <th> 누적검사 수 </th>
              <th> 확진자 수 </th>
              <th> 사망자 수 </th>
             </tr>
             <tr>
              <th> ${statusDt_v} </th>
              <th> ${accExamCnt_v} </th>
              <th> ${hPntCnt_v} </th>
              <th> ${gPntCnt_v} </th>
             </tr>
          </table>
         </body>
         </html>
        `;
        res.end(template);

        var newData = new Data({statusDt : statusDt_v, accExamCnt : accExamCnt_v, hPntCnt : hPntCnt_v, gPntCnt : gPntCnt_v});
        newData.save(function(err, result) {
          if (err) return console.error(err);
          console.log(new Date(),result);
        })
    })
})

// list
router.get('/list', function(req, res, next) {
    Data.findOne({}, function(err, docs) {
        if(err) console.log('err');
        console.log(docs)
        res.writeHead(200);
        var template = `
         <!doctype html>
         <html>
         <head>
          <title>Result</title>
          <meta charset="utf-8">
         </head>
         <body>
          <table border="1" margin: auto; text-align: center;>
             <tr>
              <th> 날 짜 </th>
              <th> 누적검사 수 </th>
              <th> 확진자 수 </th>
              <th> 사망자 수 </th>
             </tr>
             <tr>
              <th> ${docs['statusDt']} </th>
              <th> ${docs['accExamCnt']} </th>
              <th> ${docs['hPntCnt']} </th>
              <th> ${docs['gPntCnt']} </th>
             </tr>
          </table>
         </body>
         </html>
        `;
        res.end(template);
    })
})

module.exports = router;