let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
  let totalNum = num1 + num2;
  document.getElementById("sum-el").textContent = totalNum;
}

function subtract() {
  let totalNum = num1 - num2;
  document.getElementById("sum-el").textContent = totalNum;
}

function divide() {
  let totalNum = num1 / num2;
  document.getElementById("sum-el").textContent = totalNum;
}

function multiply() {
  let totalNum = num1 * num2;
  document.getElementById("sum-el").textContent = totalNum;
}
