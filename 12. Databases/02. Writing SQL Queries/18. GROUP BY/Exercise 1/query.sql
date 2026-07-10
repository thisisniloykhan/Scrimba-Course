/*
	Select the condition, and a count of the condition from cars
		group by the condition column
*/

SELECT 
	brand, 
	COUNT(brand) AS brand_count,
	CEIL(AVG(price)) AS AVG 
	FROM cars
	WHERE sold IS FALSE
	GROUP BY brand;