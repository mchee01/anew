const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
const cors = require("cors")
const mysql = require("mysql")
const db = require("../config/db_config.json")

var corsOptions = {
    origin : "http://43.201.94.25:3000"
}

app.use(cors(corsOptions))

var pool = mysql.createPool(db)

app.get('/', (req,res) => {
    res.send('Server Response Success')
    console.log('Server Response Success')
})

app.get('/hello', (req, res) => {
    res.send({ hello : 'Hello react' })
    console.log({ hello : 'Hello react' })
})

app.get('/info', (req, res) => {
    pool.getConnection(function(err, conn) {
        if (!err) {
            console.log('Database connection Success~!!')
            conn.query("select * from st_info", (err, data) => {
                if (!err) {
                    res.send({ data : data })
                    console.log({ data : data })
                }
                else res.send(err)
            })
        }
        conn.release()
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://43.201.94.25:${PORT}/`)
})