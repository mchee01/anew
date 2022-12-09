const mysql = require('mysql2')

const pool = mysql.createPool(
  	{
		// MySql Connection Info
		// rds
		//host="database-1.cx90jeyjmbks.ap-northeast-2.rds.amazonaws.com",
		// ec2 ubuntu
		host : "43.201.125.57",
 		user : "mysql",
		password : "1234",
		database : "testdb"
        }
)
const promisePool = pool.promise()

module.exports = promisePool;
