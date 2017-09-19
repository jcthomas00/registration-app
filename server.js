var express = require("express");
var mysql = require("mysql");
var path = require("path");


var app = express();
var PORT = process.env.PORT||3000;

var reservations = [{
	name: "jacob",
	phone: "281-222-2222",
	email: "jacob@gg.com",
	id: 12344
}];

app.get("/", function(req, res){
	res.send(`Listening on port ${PORT}`);
})

app.get("/api/tables", function(req, res){
	res.json(reservations);
})

app.get("/home.html", function(req, res){
	res.sendFile(path.join(__dirname, "dummy.html"));
})

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`);
});