/*
	Select cars made between 1980 and 1989
		show the brand, model, year and price
*/

SELECT brand, model, condition, color, price FROM cars
	-- WHERE year >= 1980 
	-- AND year <= 1989;
	-- WHERE year BETWEEN 1980 AND 1989;

	WHERE price BETWEEN 20000 AND 60000
	AND condition BETWEEN 1 AND 3
	AND color LIKE '%red%';