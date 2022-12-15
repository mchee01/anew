const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const request = require("request")
const moment = require("moment")
const dateutil = require("data-utils")
const mongoClient = require("mongodb").MongoClient

let day = new Date().toLocaleDateString('sv').replaceAll('-','');

var keys = "B%2FNiJnYmkZV1%2FK7ulvZI4MoSXvCTDfNAd0Snw%2Bk6g4%2BbMk1LoGVhd75DJahjv4K35Cr9jh9RX0j%2BM89grKBYsw%3D%3D";
var url = "http://apis.data.go.kr/1360000/WthrChartInfoService/getSurfaceChart";

var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + keys;
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON');
queryParams += '&' + encodeURIComponent('code') + '=' + encodeURIComponent('3');
queryParams += '&' + encodeURIComponent('time') + '=' + encodeURIComponent(day);

// define schema
var DataSchema = mongoose.Schema({
    day_v : String,
    imgSrc1_v : String,
    imgSrc2_v : String,
    imgSrc3_v : String,
    imgSrc4_v : String,
    imgSrc5_v : String,
    imgSrc6_v : String
})

// create model with mongodb collection and schema
var Data = mongoose.model('weathers', DataSchema);

// getdata
router.get('/getdata', function(req, res, next) {
    request({
            url : url + queryParams,
            method : "GET"
    }, function (error, response, body) {
        Data.find({}).remove().exec();
        if (error) console.log(error);
//        console.log('resultCode', response.resultCode);
//        console.log('Headers', JSON.stringify(response.headers));
        let data = JSON.parse(body);
        console.log("")
        console.log(data['response']['body']['items']['item'])
        
        let imgSrcArr = data['response']['body']['items']['item'][0]['man-file'].split(',');
        console.log(imgSrcArr)    

        let imgSrc1 = imgSrcArr[0].slice(1);
        let imgSrc2 = imgSrcArr[1].trim();
        let imgSrc3 = imgSrcArr[2].trim();
        let imgSrc4 = imgSrcArr[3].trim();
        let imgSrc5 = imgSrcArr[4].trim();
        let imgSrc6 = imgSrcArr[5].slice(0).trim();
        
        console.log("imgSrc1 : " + imgSrc1)
        console.log("imgSrc2 : " + imgSrc2)
        console.log("imgSrc3 : " + imgSrc3)
        console.log("imgSrc4 : " + imgSrc4)
        console.log("imgSrc5 : " + imgSrc5)
        console.log("imgSrc6 : " + imgSrc6)

        res.writeHead(200);
        var template =`
        <!doctype html>
        <html>
        <head>
        <title>Result</title>
        <meta charset="urf-8">
        </head>
        <body>
        <img src="${imgSrc1}" width="500" height="500"></img><p>
        <img src="${imgSrc2}" width="500" height="500"></img><p>
        <img src="${imgSrc3}" width="500" height="500"></img><p>
        <img src="${imgSrc4}" width="500" height="500"></img><p>
        <img src="${imgSrc5}" width="500" height="500"></img><p>
        <img src="${imgSrc6}" width="500" height="500"></img><p>
        </body>
        </html>
        `;
        res.end(template);
        
        var newData = new Data({day_v : day, imgSrc1_v : imgSrc1, imgSrc2_v : imgSrc2, 
        imgSrc3_v : imgSrc3, imgSrc4_v : imgSrc4, imgSrc5_v : imgSrc5, imgSrc6_v : imgSrc6})
        
        newData.save(function(err, result) {
            if (err) return console.error(err)
            console.log(new Date(), result)
        })
    })
})

// list
router.get('/list', function(req, res, next) {
    Data.findOne({}, function(err, docs) {
        if(err) console.log('err');
        console.log(docs)
        res.writeHead(200);
        var template =`
        <!doctype html>
        <html>
        <head>
        <title>Result</title>
        <meta charset="urf-8">
        </head>
        <body>
        <img src="${docs['imgSrc1_v']}" width="500" height="500"></img><p>
        <img src="${docs['imgSrc2_v']}" width="500" height="500"></img><p>
        <img src="${docs['imgSrc3_v']}" width="500" height="500"></img><p>
        <img src="${docs['imgSrc4_v']}" width="500" height="500"></img><p>
        <img src="${docs['imgSrc5_v']}" width="500" height="500"></img><p>
        <img src="${docs['imgSrc6_v']}" width="500" height="500"></img><p>
        </body>
        </html>
        `;
        res.end(template);
    })
})

module.exports = router;