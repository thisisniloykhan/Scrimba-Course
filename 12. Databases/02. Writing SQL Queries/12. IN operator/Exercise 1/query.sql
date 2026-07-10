/*
	Select the brand, model, condition and year from cars
		Where the year is 1961, 1963, 1965, 1967 or 1969
		and the condition is 3 or higher
		and sold is false
*/

SELECT brand, model, price, sold FROM cars 
	WHERE (brand NOT IN ('Ford', 'Triumph', 'Chevrolet', 'Dodge')
	OR price < 50000)
	AND sold IS false;