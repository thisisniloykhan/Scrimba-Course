/*
	Select the maximum retail price
		where sold is true
	Use most_expensive as an alias
*/

SELECT 
CEIL(AVG(price)) AS avg,
MIN(price),
MAX(price) 
FROM cars
	WHERE sold IS TRUE;
	 
