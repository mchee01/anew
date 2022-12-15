const morgan = require("morgan")

var data = [
  {
    'man-file': '[http://www.kma.go.kr/repositary/image/cht/img/sfc3_2022121000.png, http://www.kma.go.kr/repositary/image/cht/img/sfc3_2022121003.png, http://www.kma.go.kr/repositary/image/cht/img/sfc3_2022121006.png, http://www.kma.go.kr/repositary/image/cht/img/sfc3_2022121009.png, http://www.kma.go.kr/repositary/image/cht/img/sfc3_2022121012.png, http://www.kma.go.kr/repositary/image/cht/img/sfc3_2022121015.png, http://www.kma.go.kr/repositary/image/cht/img/sfc3_2022121018.png]'
  }
]

console.log()
console.log(data)

let dataArr = data[0]['man-file'].split(',');
console.log()
console.log(dataArr)    

let data1 = dataArr[0].slice(1);
let data2 = dataArr[1].trim();
let data3 = dataArr[2].trim();
let data4 = dataArr[3].trim();
let data5 = dataArr[4].trim();
let data6 = dataArr[5].slice(0).trim();

console.log()
console.log("data1 : " + data1)
console.log("data2 : " + data2)
console.log("data3 : " + data3)
console.log("data4 : " + data4)
console.log("data5 : " + data5)
console.log("data6 : " + data6)
console.log()
