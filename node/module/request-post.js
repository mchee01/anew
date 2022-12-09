const https = require("https")

const data = JSON.stringify({
    todo: 'Buy the milk'
})
const options ={
    hostname: 'example.com',
    port:3000,
    path:'/todos',
    method : 'POST',
    header : {
        'Content-Type':'application/json'
    
    }
}