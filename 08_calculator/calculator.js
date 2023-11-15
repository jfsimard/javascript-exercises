const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  return array.reduce((sum, item) => sum + item, 0);
};

const multiply = function(array) {
  return array.reduce((product, item) => product * item);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(n) {
  let total = 1;
  for (let index = 1; index < n; index++) {
    total = total * (index + 1);
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
