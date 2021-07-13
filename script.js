const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
let displayValue;
let firstNumber;
let operator;
let secondNumber;

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!firstNumber) {
      display.textContent += e.target.textContent;
      displayValue = display.textContent;
      firstNumber = parseFloat(e.target.textContent);
    } else {
      display.textContent = e.target.textContent;
      displayValue = display.textContent;
      secondNumber = parseFloat(display.textContent);
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.textContent = e.target.textContent;
    operator = display.textContent;
  });
});
function resolve() {
  operate(operator, firstNumber, secondNumber);
}
function operate(operator, firstNumber, secondNumber) {
  if (operator == "+") {
    add(firstNumber, secondNumber);
  } else if (operator == "-") {
    subtract(firstNumber, secondNumber);
  } else if (operator == "*") {
    multiply(firstNumber, secondNumber);
  } else if (operator == "/") {
    divide(firstNumber, secondNumber);
  }
}

function add(a, b) {
  return (display.textContent = a + b);
}
function subtract(a, b) {
  return (display.textContent = a - b);
}

function multiply(a, b) {
  return (display.textContent = a * b);
}

function divide(a, b) {
  return (display.textContent = a / b);
}
