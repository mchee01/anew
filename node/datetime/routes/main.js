const express = require("express");
const app = express();

// 영어식 표기
function printDate() {
  const today = new Date(); // 현재 날짜
  const year = today.toLocaleDateString('en-US', {
    year: 'numeric',
  });
  const month = today.toLocaleDateString('en-US', {
    month: '2-digit',
  });
  const day = today.toLocaleDateString('en-US', {
    day: '2-digit',
  });
  const weekday = today.toLocaleDateString('en-US', {
    weekday: 'long',
  });
  
  return `${year}-${month}-${day} ${weekday}`;
}

// 한글식 표기
function printKorDate() {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });
  
  return `${dateString} ${dayName}`;
}

// return today
app.get("/getdate", (req, res) => {
    let today = new Date().toLocaleDateString('sv').replaceAll('-','');
    console.log(today)
    res.send(today);
});

// 영어 버튼 클릭
app.get("/date/en", (req, res) => {
    const text = printDate();
    console.log(text)
    res.send(text)
});

// 한글 버튼 클릭
app.get("/date/ko", (req, res) => {
    const text = printKorDate();
    console.log(text)
    res.send(text)
});

module.exports = app;