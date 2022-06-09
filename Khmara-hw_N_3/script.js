const operator = prompt(
  `Hello! Choose an operation for calculation:\n +\n -\n /\n *\n %\n cos\n sin\n pow`
);

let firstOperand, secondOperand, operand4CosSin, error;

if (operator === "sin" || operator === "cos") {
  operand4CosSin = +prompt("Now - give me number, please:");
} else if (
  operator === "+" ||
  operator === "-" ||
  operator === "/" ||
  operator === "*" ||
  operator === "%" ||
  operator === "pow"
) {
  firstOperand = +prompt("Now - give me first number, please:");
  secondOperand = +prompt("And second number, please:");
} else {
  error = alert("ERROR. No such operation. Try again, please.");
  location.reload();
}

if (operator === "+") {
  alert(firstOperand + secondOperand);
} else if (operator === "-") {
  alert(firstOperand - secondOperand);
} else if (operator === "/") {
  alert(firstOperand / secondOperand);
} else if (operator === "*") {
  alert(firstOperand * secondOperand);
} else if (operator === "%") {
  alert(firstOperand % secondOperand);
} else if (operator === "cos") {
  alert(Math.cos(operand4CosSin));
} else if (operator === "sin") {
  alert(Math.sin(operand4CosSin));
} else if (operator === "pow") {
  alert(Math.pow(firstOperand, secondOperand));
}
