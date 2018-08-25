var express = require("express"); 
var path = require("path"); 

var app = express(); 

module.exports = function(app){


app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname  + "/../app/public/survey.html"))
});

app.use("/", function(req, res){
    res.sendFile(path.join(__dirname + "../app/public/home.html"))
})
}