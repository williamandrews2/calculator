// variables
let displayValue = "";
let firstOperand;
let secondOperand;
let operator;
let result;

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

// Functions
const updateDisplay = function () {
  // Need to add check to make sure number is not too long
  display.innerHTML = displayValue;
};

updateDisplay();

const buttonPress = function () {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      console.log(buttons[i].classList.value);
      if (buttons[i].classList.value == "operand") {
        displayValue += buttons[i].value;
        updateDisplay();
      } else if (buttons[i].classList.value == "operator") {
        updateDisplay();
      } else if (buttons[i].classList.value == "clear") {
        clearDisplay();
        updateDisplay();
      }
    });
  }
};

buttonPress();

const clearDisplay = () => (displayValue = "");

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
