/*
	Count the number of cars
		where sold is true
*/

SELECT SUM(price) AS total_earnings FROM cars
	WHERE sold IS TRUE;