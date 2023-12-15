// let first, operator, last;
const display = document.querySelector(".display");
const operand = document.querySelector(".operand");
const operator = document.querySelector(".operator");
const clear = document.querySelector("#clear");

// event listeners
clear.addEventListener("click", () => {
  display.textContent = "0";
});

operand.addEventListener("click", () => {
  display.textContent = "button pressed";
});

// Functions
const updateDisplay = function () {};

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
