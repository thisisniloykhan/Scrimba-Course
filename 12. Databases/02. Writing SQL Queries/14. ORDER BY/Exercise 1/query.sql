
/*
	Select the brand, model, condition and price from cars
		order the table by condition in descending order
		and by price in ascending order
*/

SELECT brand, model, condition, price FROM cars
	WHERE sold IS FALSE
	AND condition != 5
	ORDER BY condition DESC, price;