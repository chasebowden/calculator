var BMI = function(weight, height) {
	height = height*.0254;
  weight = weight*.454;
	return(weight / (height * height));
};

var weight = parseInt(prompt("What is your weight?"));

var height = parseInt(prompt("What is your weight in inches?"));


alert(BMI(weight, height));
