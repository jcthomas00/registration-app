var express = require("express");
var mysql = require("mysql");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var PORT = process.env.PORT||3000;

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'madonna',
	database: 'hotelDB'
});

var reservations = [];

function queryReservations(query){
	connection.connect(function(err){
		if(err){console.log("Error connecting to database."); return }
		connection.query(query, function(err, results){
			reservations = results;
		})

	});
}

//$.post(currentURL + "/api/tables", newReservation,

app.post("/api/tables", function(req, res){
	var newReservation = req.body.newReservation;
	var query = connection.query("INSERT INTO reservations "+
			"(customer_name, phoneNumber, customerEmail, customerID) VALUES " +
			"(?,?,?,?)", [newReservation.reserve_name, newReservation.reserve_phone, 
			newReservation.reserve_email, newReservation.reserve_uniqueID]);
	console.log(query);
	if (newReservation){
		queryReservations(query);
		res.send(true);
	}
	res.send(false);
})

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