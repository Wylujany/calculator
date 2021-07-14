const displaySolution = document.querySelector("#displaySolution");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");
const equalsButton = document.querySelector(".equals");
const decimalButton = document.querySelector(".decimal");

let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldResetDisplay = false;

equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
backspaceButton.addEventListener("click", backspace);
decimalButton.addEventListener("click", appendPoint);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => setOperation(button.textContent));
});

function appendNumber(num) {
  if (displaySolution === "0" || shouldResetDisplay) resetDisplay();
  displaySolution.textContent += num;
}

function resetDisplay() {
  displaySolution.textContent = "";
  shouldResetDisplay = false;
}

function clear() {
  displaySolution.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  currentOperator = null;
}

function appendPoint() {
  if (shouldResetDisplay) resetDisplay();
  if (displaySolution.textContent === "") displaySolution.textContent = "0";
  if (displaySolution.textContent.includes(".")) return;
  displaySolution.textContent += ".";
}

function backspace() {
  displaySolution.textContent = displaySolution.textContent
    .toString()
    .slice(0, -1);
}

function setOperation(operator) {
  if (currentOperator !== null) evaluate();
  firstNumber = displaySolution.textContent;
  currentOperator = operator;
  shouldResetDisplay = true;
}

function evaluate() {
  if (currentOperator === null || shouldResetDisplay) return;
  if (currentOperator === "/" && screen.textContent === "0") {
    alert("You cant divide by 0!");
    clear();
    return;
  }
  secondNumber = displaySolution.textContent;
  displaySolution.textContent = roundNumbers(
    operate(currentOperator, firstNumber, secondNumber)
  );
  currentOperator = null;
}
function roundNumbers(num) {
  return Math.round(num * 10) / 10;
}
function operate(operator, first, second) {
  first = Number(first);
  second = Number(second);
  switch (operator) {
    case "+":
      return add(first, second);
    case "-":
      return subtract(first, second);
    case "*":
      return multiply(first, second);
    case "/":
      return divide(first, second);
    default:
      return null;
  }
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
