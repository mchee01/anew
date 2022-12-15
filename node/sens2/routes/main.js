const express = require("express");
const env = require("dotenv").config({ path: "../../../.env"});
const request = require("request");
var CryptoJS = require("crypto-js")
var SHA256 = require('crypto-js/sha256');
var Base64 = require('crypto-js/enc-base64');
const app = express();

app.get("/Hello", (req, res) => {
  res.send("Hello SMS Service~!!");
});

function send_message(phone_number, user_msg) {
  var user_phone_number = phone_number;//수신 전화번호 기입
  var resultCode = 404;
  const date = Date.now().toString();
  const uri = process.env.ServiceId; //서비스 ID
  const secretKey = process.env.SecretKey;// Secret Key
  const accessKey = process.env.AccessKey;//Access Key
  const method = "POST";
  const space = " ";
  const newLine = "\n";
  const url = `https://sens.apigw.ntruss.com/sms/v2/services/${uri}/messages`;
  const url2 = `/sms/v2/services/${uri}/messages`;
  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
  hmac.update(method);
  hmac.update(space);
  hmac.update(url2);
  hmac.update(newLine);
  hmac.update(date);
  hmac.update(newLine);
  hmac.update(accessKey);
  const hash = hmac.finalize();
  const signature = hash.toString(CryptoJS.enc.Base64);
  
  request({
    method: method,
    json: true,
    uri: url,
    headers: {
      "Contenc-type": "application/json; charset=utf-8",
      "x-ncp-iam-access-key": accessKey,
      "x-ncp-apigw-timestamp": date,
      "x-ncp-apigw-signature-v2": signature,
    },
    body: {
      type: "SMS",
      countryCode: "82",
      from: process.env.My_number,
      content: `${user_phone_number} 발송 메시지 ${user_msg}`,
      messages: [
        { to: `${user_phone_number}`, },],
    },
  },
    function (err, res, html) {
      if (err) console.log(err);
      else { resultCode = 200; console.log(html); }
    }
  );
  return resultCode;
}

app.post("/send_sms", (req, res) => {
  const { phone_number, user_msg } = req.body
  send_message(phone_number, user_msg);
  res.send("Complete!")
});

module.exports = app;