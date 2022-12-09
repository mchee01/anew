const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const request = require("request")
const moment = require("moment")
const dateutil = require("data-utils")
const mongoClient = require("mongodb").MongoClient

let day = new Date().toLocaleDateString('sv').replaceAll('-','');

var keys = "X6B4L8ImAS4MDktlIVLKb9%2B6XcoW%2Bu0jaAae%2F7Y3WLJ1KT9OEdyPLjEnVgPVlWObXotHE7QKeve7LCBmKS%2B7Iw%3D%3D";
var url = "http://apis.data.go.kr/1360000/WthrChartInfoService/getSurfaceChart";

var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + keys;
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON');
queryParams += '&' + encodeURIComponent('code') + '=' + encodeURIComponent('3');
queryParams += '&' + encodeURIComponent('time') + '=' + encodeURIComponent(day);

// define schema
var DataSchema = mongoose.Schema({
    day_v: String,
    imgSrc1_v : String,
    imgSrc2_v : String
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
        let imgSrcArr = data['response']['body']['items']['item'][0]['man-file'].split(',');
        let imgSrc1 = imgSrcArr[0].slice(1);
        let imgSrc2 = imgSrcArr[1].trim().slice(0, -1);
        console.log(imgSrc1);
        console.log(imgSrc2);

        console.log(data['response']['body']['items']['item']['man-file']);
        res.writeHead(200);
        var template =`
        <!doctype html>
        <html>
        <head>
        <title>Result</title>
        <meta charset="urf-8">
        </head>
        <body>
        <img src="${imgSrc1}" width="500" height="500"></img><br>
        <img src="${imgSrc2}" width="500" height="500"></img><br>
        </body>
        </html>
        `;
        res.end(template);
        var newData = new Data({day_v :day,imgSrc1_v : imgSrc1, imgSrc2_v : imgSrc2});
        newData.save(function(err,result){
            if(err)return console.error(err)
            console.log(new Date(),result)
        })
    })
})
router.get('/list',function(req,res,next){
    Data.find({},function(err,docs){
        if(err)console.log('err');
        res.writeHead(200);
        var template=`
        <!DOCTYPE html>
        <html>
        <head>
        <title>Result</title>
        <meta charset="utf-8">
        </head>
        <body>
        <img src="${docs['imgSrc1_v']}" width="500" height="500"></img><br>
        <img src="${docs['imgSrc2_v']}" width="500" height="500"></img><br>
        </body>
        </html>
        `
    })
})
module.exports = router;