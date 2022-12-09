const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

// define schema
var userSchema = mongoose.Schema({
    userid : String,
    name : String,
    city : String,
    sex : String,
    age : Number
})

var User = mongoose.model('users', userSchema);
router.get('/list',function(req,res,next){
    User.find({}, function(err,docs){
        if(err) console.log('err')
        res.send(docs);
    })
})
router.get('/get', function(req, res, next) {
    db = req.db;
    var userid = req.query.input
    User.findOne({'userid':userid}, function(err,doc){
        if(err) console.log('err')
        res.send(doc)
    })
})
router.post('/insert',function(req,res,next){
    var userid =req.body.userid;
    var name =req.body.name;
    var city =req.body.city;
    var sex = req.body.sex;
    var age = req.body.age;
    var user = new User({'userid':userid, 'name': name, 'city':city, 'sex':sex, 'age':age})
    user.save(function(err, silence){
        if(err){
            console.log('err')
            res.status(500).send('update error')
            return;
        }
        res.status(200).send("Inserted")
    })
})
//update
router.post('/update',function(req,res,next){
    var userid =req.body.userid;
    var name =req.body.name;
    var city =req.body.city;
    var sex = req.body.sex;
    var age = req.body.age;
    var user = new User({'userid':userid, 'name': name, 'city':city, 'sex':sex, 'age':age})
    
    User.findOne({'userid':userid},function(err, silence){
        if(err){
            console.log('err')
            res.status(500).send('update error')
            return;
        }
    user.name=name;
    user.sex = sex;
    user.city = city;
    user.age = age;
    user.save(function(err, silence){
        if(err){
            console.log('err')
            res.status(500).send('update error')
            return;
        }
        res.status(200).send("Updated")
    })
       
    })
})
router.post('/delete',function(req,res,next){
    var userid = req.body.userid;
    var user = User.find({'userid':userid})
    user,remove(function(err){
        if(err){
            console.log('err')
            res.status(500).send('delete error')
            return;
        }
        res.status(200).send("Removed")
    })
})
function query6(callback){
    User.find({},{'_id':0})
        .where('city').equals('Seoul')
        .where('age').gt(15).lt(23)
        .sort({'age':1})
        .select('userid name age')
        .exec(function(err, users){
            console.log("\nQuery 6");
            console.log(users+"\n");
            callback(null);
        })
}
async.series([query1, query2, query4, query4, query5, query6],function(){
    
})
module.exports = router;