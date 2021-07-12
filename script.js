const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".number");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.textContent += e.target.textContent;
  });
});

function operate(operator, firstNumber, secondNumber) {
  if (operator == "+") {
    add(fistNumber, secondNumber);
  } else if (operator == "-") {
    subtract(fistNumber, secondNumber);
  } else if (operator == "*") {
    multiply(fistNumber, secondNumber);
  } else if (operator == "/") {
    divide(fistNumber, secondNumber);
  }
}
