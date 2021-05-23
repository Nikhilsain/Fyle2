var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    request = require("request");
   
  
app.use(express.static("public"));    
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/views/partials"))
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
const { json } = require("body-parser");

  

app.get("/", function(req,res){

   res.render("render");
   
 });
 

 app.listen(process.env.PORT || 3000,process.env.IP,function(){
    console.log("this server strats");
})