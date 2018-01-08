var add = function(number1, number2) {
  return number1 + number2;
};



var multiply = function(number1, number2) {
  return number1 * number2;
};


var subtract = function(number1, number2) {
  return number1 - number2;
};



var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = subtract(number1, number2);
alert(result);

/* code for gallon to liter conversion

var GallontoLiter = function(gallon) {
	return (gallon) * 3.78;
};

var gallon = parseInt(prompt("How many gallons?"));

alert(GallontoLiter(gallon));

*/
