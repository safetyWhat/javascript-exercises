const add = function(a, b) {
	let solution = a + b;
  return solution;
};

const subtract = function(a, b) {
	let solution = a - b;
  return solution;
};

const sum = function(number) {
  let arr = number;
	let solution = arr.reduce((sum, current) => sum + current, 0);
  return solution;
};

const multiply = function(number) {
  let arr = number;
	let solution = arr.reduce((prod, current) => prod * current);
  return solution;
};

const power = function(a, b) {
  let solution = Math.pow(a, b);
  return solution;
};

const factorial = function(n) { //n! = (n - 1)! * n
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
