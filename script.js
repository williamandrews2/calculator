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
      } else if (buttons[i].classList.value == "negate") {
        negateHandler(displayValue);
        updateDisplay();
      } else if (buttons[i].classList.value == "percent") {
        percentHandler(displayValue);
        updateDisplay();
      } else if (buttons[i].classList.value == "decimal") {
        decimalHandler(buttons[i].value);
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
    result = operate(
      Number(firstOperand),
      firstOperator,
      Number(secondOperand)
    );
    displayValue = roundNumber(result, 11).toString();
    firstOperand = displayValue;
    // reset the variable
    result = null;
  } else if (firstOperator != null && secondOperator != null) {
    secondOperand = displayValue;
    result = operate(
      Number(firstOperand),
      secondOperator,
      Number(secondOperand)
    );
    secondOperator = a;
    displayValue = roundNumber(result, 11).toString();
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
    result = operate(
      Number(firstOperand),
      secondOperator,
      Number(secondOperand)
    );
    if (result == "ERROR") {
      displayValue = "ERROR";
    } else {
      displayValue = roundNumber(result, 11).toString();
      firstOperand = displayValue;
      // reset variables to start a new calculation
      secondOperand = null;
      firstOperator = null;
      secondOperator = null;
      result = null;
    }
  } else {
    secondOperand = displayValue;
    result = operate(
      Number(firstOperand),
      firstOperator,
      Number(secondOperand)
    );
    if (result == "ERROR") {
      displayValue = "ERROR";
    } else {
      displayValue = roundNumber(result, 11).toString();
      firstOperand = displayValue;
      // reset variables to start a new calculation
      secondOperand = null;
      firstOperator = null;
      secondOperator = null;
      result = null;
    }
  }
}

function negateHandler(a) {
  displayValue = (a * -1).toString();
}

function roundNumber(num, places) {
  return parseFloat(Math.round(num + "e" + places) + "e-" + places);
}

function decimalHandler(a) {
  if (displayValue === firstOperand || displayValue === secondOperand) {
    displayValue = "";
    displayValue += a;
  } else if (!displayValue.includes(a)) {
    displayValue += a;
  }
}

function percentHandler(a) {
  displayValue = (a * 100).toString();
}

function resetDisplay() {
  clearDisplay();
  firstOperand = null;
  secondOperand = null;
  firstOperator = null;
  result = null;
}

function operate(first, op, last) {
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
}

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
