const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (nums) {
  return nums.reduce((acc, curr) => acc * curr, 1);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
