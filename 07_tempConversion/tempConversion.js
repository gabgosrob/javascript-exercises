const ftoc = function(temperature) {
	let celsius = (temperature - 32) * 5/9;

	// round to 1st decimal
	return Math.round(celsius * 10) / 10;
};

const ctof = function(temperature) {
	let fahrenheit = (temperature * 9/5) + 32;

	// round to 1st decimal
	return Math.round(fahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
