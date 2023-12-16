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
          displayValue == "/" ||
          result != null
        ) {
          clearDisplay();
        }
        displayValue += buttons[i].value;
        updateDisplay();
      } else if (buttons[i].classList.value == "operator") {
        // NOTE: when we hit the plus the screen needs to store the first number in the first
        // operand and update the display witht hte operator.
        if (result != null) {
          operator = buttons[i].value;
        }
        operatorHandler(buttons[i].value);
      } else if (buttons[i].classList.value == "clear") {
        resetDisplay();
        updateDisplay();
      }
      console.log("firstOperand: " + firstOperand);
      console.log("operator: " + operator);
      console.log("secondOperator: " + secondOperand);
      console.log("result: " + result);
      console.log("display value: " + displayValue);
      console.log("----------");
    });
  }
}

buttonPress();

function operatorHandler(a) {
  if (operator == null && result == null) {
    // Assign the first operand that was input to the calculator.
    firstOperand = displayValue;
    operator = a;
    clearDisplay();
  } else if (operator == null && result != null) {
    operator = a;
    clearDisplay();
    updateDisplay();
  } else if (operator != null && secondOperand == null) {
    secondOperand = displayValue;
    result = operate(firstOperand, operator, secondOperand);
    // Update the display with the new result
    displayValue = result;
    updateDisplay();
    // Reset the variables for a second calculation
    secondOperand = null;
    firstOperand = result;
    operator = null;
  }
  // else if (operator != null && secondOperand != null) {
  //   operator = a;
  // }

  // clearDisplay();
}

function clearDisplay() {
  displayValue = "";
}

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
