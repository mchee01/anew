const axios = require("axios")

axios
    .post('https://example.com/todos', {
        todo : "Buy the milk"
    })
    .then(res =>{
        console.log(`statusCode : ${res.status}`)
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    })