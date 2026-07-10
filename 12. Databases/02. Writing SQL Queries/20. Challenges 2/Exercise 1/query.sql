/*
	Select brand, model, and year from cars
		only show the oldest 5 cars in the database
		show cars which haven't been sold
*/

SELECT color, COUNT(color) AS color_count FROM cars
	WHERE sold IS FALSE
	GROUP BY color
	HAVING COUNT(color) > 2
	ORDER BY color_count DESC
	