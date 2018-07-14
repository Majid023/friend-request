var express = require( "express" );
var router = express.Router();

router.get( "/" , function( req , res) {
   res.render("index", {
       pageTitle : "HomePage",
       pageID : "Home"
   });
});

module.exports = router;