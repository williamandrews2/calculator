// variables
let displayValue = "";
let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = null;

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

function updateDisplay() {
  if (displayValue.length >= 12) {
    // Display max of 11 characters on the display screen
    display.innerHTML = displayValue.substring(0, 12);
  } else {
    display.innerHTML = displayValue;
  }
}

updateDisplay();

function buttonPress() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      if (buttons[i].classList.value == "operand") {
        // Clear the display to show the operand that was just pressed.
        if (
          displayValue == "+" ||
          displayValue == "-" ||
          displayValue == "*" ||
          displayValue == "/"
        ) {
          clearDisplay();
        }
        displayValue += buttons[i].value;
        updateDisplay();
      } else if (buttons[i].classList.value == "operator") {
        // NOTE: when we hit the plus the screen needs to store the first number in the first
        // operand and update the display witht hte operator.
        operatorHandler(buttons[i].value);
      } else if (buttons[i].classList.value == "clear") {
        resetDisplay();
        updateDisplay();
      }
      console.log(firstOperand);
      console.log(operator);
      console.log(secondOperand);
      console.log(result);
    });
  }
}

buttonPress();

function operatorHandler(a) {
  clearDisplay();
  updateDisplay();
  if (operator == null) {
    // Assign the first operand that was input to the calculator.
    firstOperand = displayValue;
  } else if (operator != null && secondOperand == null) {
    secondOperand = displayValue;
  } else if (operator != null && secondOperand != null) {
    result = operate(firstOperand, operator, secondOperand);
    displayValue = result;
    updateDisplay();
  }

  operator = a;
  clearDisplay();
}

const clearDisplay = () => {
  displayValue = "";
};

const resetDisplay = () => {
  clearDisplay();
  firstOperand = null;
  secondOperand = null;
  operator = null;
  result = null;
};

const operate = function (first, op, last) {
  first = parseInt(first);
  last = parseInt(last);

  if (op == "+") {
    return add(first, last);
  }
  if (op == "-") {
    return subtract(first, last);
  }
  if (op == "*") {
    return multiply(first, last);
  }
  if (op == "/") {
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
