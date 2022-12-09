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
    resultcode : String,
    resultMsg : String,
    dataType : String,
    Manfile : String
})

// create model with mongodb collection and schema
var Data = mongoose.model('weather', DataSchema);

// getdata
router.get('/getdata', function(req, res, next) {
    request({
            url : url + queryParams,
            method : "GET"
    }, function (error, response, body) {
        Data.find({}).remove().exec();
        if (error) console.log(error)
//        console.log('resultCode', response.resultCode);
//        console.log('Headers', JSON.stringify(response.headers));
        let data = JSON.parse(body)
        console.log(data['response']['body']['items']['item'])
        res.json(data)

    })
})
module.exports = router;