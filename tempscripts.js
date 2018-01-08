var farToCel = function(temp){
	return ((temp - 32)*(5/9));
}
var temp = parseInt(prompt("What is the temperature in Farenheight?"));

alert(temp + " degrees farenheight is equal to " + farToCel(temp) + " degrees celcius.");
