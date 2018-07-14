var mongodb = require( "mongodb").MongoClient;
var express = require( "express");
var router = express.Router();

router.post("/friendlist" , function( req , res){
    var url = "mongodb://localhost:27017";
   
    mongodb.connect( url , function( err , db){
        if (err) throw err;
        var dbo = db.db( "friendlist" );
        dbo.collection("friends").find({}).toArray(function(err,result){
            if(err) throw err;
            console.log(" majid sdfsafs sdfsadf");
            res.send(result);
            db.close();
        });
       
    });
   
});


module.exports = router;