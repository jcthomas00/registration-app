CREATE DATABASE IF NOT EXISTS hotelDB;

use hotelDB;

CREATE TABLE IF NOT EXISTS reservations (
	customer_name VARCHAR(60),
	phoneNumber VARCHAR(20),
	customerEmail VARCHAR(60),
	customerID INT(10)
);