const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
let displayValue;
let firstNumber = 0;
let operator;
let secondNumber = 0;
clearButton.addEventListener("click", () => clear());

function clear() {
  display.textContent = "";
  firstNumber = 0;
  secondNumber = 0;
  operator = "";
  console.log(firstNumber);
}

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!operator) {
      display.textContent += e.target.textContent;
      displayValue = display.textContent;
      firstNumber = parseFloat(displayValue);
      console.log(firstNumber);
    } else {
      display.textContent += e.target.textContent;
      displayValue = display.textContent;
      secondNumber = parseFloat(display.textContent);
      console.log(secondNumber);
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.textContent = e.target.textContent;
    operator = display.textContent;
    display.textContent = "";
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(operator);
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
