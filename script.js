// create variables
let displayValue = "";
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
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
        operandHandler(buttons[i].value);
        updateDisplay();
      } else if (buttons[i].classList.value == "operator") {
        operatorHandler(buttons[i].value);
        updateDisplay();
      } else if (buttons[i].classList.value == "clear") {
        resetDisplay();
        updateDisplay();
      } else if (buttons[i].classList.value == "equals") {
        equalsHandler();
        updateDisplay();
      }
    });
  }
}

buttonPress();

function operatorHandler(a) {
  if (firstOperator != null && secondOperator == null) {
    // 4th click
    secondOperator = a;
    secondOperand = displayValue;
    result = operate(firstOperand, firstOperator, secondOperand);
    displayValue = result;
    firstOperand = displayValue;
    // reset the variable
    result = null;
  } else if (firstOperator != null && secondOperator != null) {
    secondOperand = displayValue;
    result = operate(firstOperand, secondOperator, secondOperand);
    secondOperator = a;
    displayValue = result;
    firstOperand = displayValue;
    result = null;
  } else {
    firstOperator = a;
    firstOperand = displayValue;
  }
}

function operandHandler(a) {
  // variable 'a' is the operand
  if (firstOperator == null) {
    if (displayValue == "") {
      // 1st click input by the user
      displayValue = a;
    } else if (displayValue == firstOperand) {
      // this happens after the equal sign is pressed to start a new equation
      displayValue = a;
    } else {
      displayValue += a;
    }
  } else {
    if (displayValue == firstOperand) {
      displayValue = a;
    } else {
      displayValue += a;
    }
  }
}

function clearDisplay() {
  displayValue = "";
  firstOperand = null;
  secondOperand = null;
  firstOperator = null;
  secondOperator = null;
  result = null;
}

function equalsHandler() {
  if (firstOperator == null) {
    displayValue = displayValue;
  } else if (secondOperator != null) {
    secondOperand = displayValue;
    result = operate(firstOperand, secondOperator, secondOperand);
    if (result == "ERROR") {
      displayValue = "ERROR";
    } else {
      displayValue = result;
      firstOperand = displayValue;
      // reset variables to start a new calculation
      secondOperand = null;
      firstOperator = null;
      secondOperator = null;
      result = null;
    }
  } else {
    secondOperand = displayValue;
    result = operate(firstOperand, firstOperator, secondOperand);
    if (result == "ERROR") {
      displayValue = "ERROR";
    } else {
      displayValue = result;
      firstOperand = displayValue;
      // reset variables to start a new calculation
      secondOperand = null;
      firstOperator = null;
      secondOperator = null;
      result = null;
    }
  }
}

const resetDisplay = () => {
  clearDisplay();
  firstOperand = null;
  secondOperand = null;
  firstOperator = null;
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
  if (b == 0) {
    return "ERROR";
  } else {
    return a / b;
  }
};
