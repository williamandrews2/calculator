// Initialize the two numbers and the operator variables.
let first, operator, last;

const operate = function (first, operator, last) {
  if (operator == "+") {
    return add(first, last);
  }
  if (operator == "-") {
    return subtract(first, last);
  }
  if (operator == "*") {
    return multiply(first, last);
  }
  if (operator == "/") {
    return divide(first, last);
  }
};

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};
