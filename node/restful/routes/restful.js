const express = require('express');
const bodyParser = require('body-parser');
const axios= require("axios");
const CircularJSON = require("circular-json");
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

let urls =""
const users=[
	{ id : 1, name : "User1"},
	{ id : 2, name : "User2"},
	{ id : 3, name : "User3"},
]
app.delete("/api/user/delete",(req,res)=>{
	const {user_id}= req.body;
	const user = users.filter(data => data.id != user_id);
	res.json({ok:true,users:user});
	
})
app.get("/api/user/add",(req,res)=>{
	const options= {
		url="http://13.125.153.53:3000/api/users/add",
		method:'POST',
		form : {
			id:req.body.id
			name:req.body.name
		}
		
	};
	const user = users.filter(data => data.id != user_id);
	res.json({ok:true,users:user});
	
})
app.get("/api/users/user",(req,res)=>{
	if(req.query.name == null){
		urls = "http://13.125.153.53:3000/api/users/user?user_id="+req.query.user_id;
	}else{
		urls = "http://13.125.153.53:3000/api/users/user?user_id="+req.query.user_id+"&name="+req.query.name;
	}
	request(urls,{json: true}, (err,result,body) =>{
		if(err){return console.log(err);}
		res.send(CirularJSON.strtingify(body))
	})
})
app.get("/Hello",(req,res) =>{
urls = "http://13.125.153.53:3000/Hello";
request(urls,{json:true}, (err,result, body)=>{
	
});
});
app.get("/api/users", (req,res) => {
	res.json({ ok :true, users: users})
})
app.get("/api/users/user", (req, res) =>{
	const user_id = req.query.user_id
	const user = users.filter(data => data.id == user_id)
	res.json({ ok:false, users: user})
})
app.get("/api/users/:user_id", (req, res) => {
    const user_id = req.params.user_id
    const user = users.filter(data => data.id == user_id)
    res.json({ ok:false, users: user })
})
//post, request body, response 0
app.post("/api/user/userBody",(req,res)=>{
	const id= req.body.id
	const user = users.filter(data => data.id == user_id)
	res.json({ ok: true, users: user})
})
app.post("/api/user/useradd",(req,res)=>{
         const {id,name}= req.body
         const user = users.concat({id,name})
         res.json({ ok: true, users: user})
})
app.put("/api/user/update",(req,res) => {
	const {id,name} = req.body
	const user = users.map(data => {
		if(data.id==id) data_name=name
		return{
		id:data.id,
		name:data.name
		}
	})
	res.json({ok:true, users:user})
})
app.patch("/api/users/update/:user_id",(req,res)=>{
	const {user_id} = req.params
	const {name} = req.body
	const user= users.map(data =>{
	if(data.id == id) data.name = name
	return {
	id :data.id,
	name : data.name
	}
	})
})

module.exports = app;
