{"filter":false,"title":"main.js","tooltip":"/node/hash/routes/main.js","undoManager":{"mark":5,"position":5,"stack":[[{"start":{"row":3,"column":0},"end":{"row":35,"column":1},"action":"remove","lines":["// 영어식 표기","function printDate() {","  const today = new Date(); // 현재 날짜","  const year = today.toLocaleDateString('en-US', {","    year: 'numeric',","  });","  const month = today.toLocaleDateString('en-US', {","    month: '2-digit',","  });","  const day = today.toLocaleDateString('en-US', {","    day: '2-digit',","  });","  const weekday = today.toLocaleDateString('en-US', {","    weekday: 'long',","  });","  ","  return `${year}-${month}-${day} ${weekday}`;","}","","// 한글식 표기","function printKorDate() {","  const today = new Date();","  const dateString = today.toLocaleDateString('ko-KR', {","    year: 'numeric',","    month: 'long',","    day: 'numeric',","  });","  const dayName = today.toLocaleDateString('ko-KR', {","    weekday: 'long',","  });","  ","  return `${dateString} ${dayName}`;","}"],"id":2}],[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["",""],"id":3},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":3,"column":0},"end":{"row":23,"column":0},"action":"remove","lines":["// return today","app.get(\"/getdate\", (req, res) => {","    let today = new Date().toLocaleDateString('sv').replaceAll('-','');","    console.log(today)","    res.send(today);","});","","// 영어 버튼 클릭","app.get(\"/date/en\", (req, res) => {","    const text = printDate();","    console.log(text)","    res.send(text)","});","","// 한글 버튼 클릭","app.get(\"/date/ko\", (req, res) => {","    const text = printKorDate();","    console.log(text)","    res.send(text)","});",""],"id":4}],[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":3,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["// simple api","app.get(\"/Hello\", (req, res) => {","  res.send(\"Hello World!!\");","});",""],"id":6}],[{"start":{"row":6,"column":3},"end":{"row":7,"column":0},"action":"remove","lines":["",""],"id":7}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":21},"end":{"row":15,"column":21},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1670892289451,"hash":"6a5b6b2859c9e430a795eb7888becda23aa78b2a"}