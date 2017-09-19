var express = require("express");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT||3000;

app.get("/", function(req, res){
	res.send("Listening on port ${PORT}");
})

app.listen(PORT, function(){

});