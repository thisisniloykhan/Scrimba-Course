/*
	Update the record for the Aston Martin DB4 with ID 14
		set the condition to 5
		and the price to 465000
*/

UPDATE cars SET 
	condition = 1, price = 10000
	WHERE brand = 'Porsche' AND sold IS FALSE;
