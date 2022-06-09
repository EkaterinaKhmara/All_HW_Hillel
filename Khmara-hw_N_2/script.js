const userName = prompt("Hello dear guest! What is your name?");

alert(`Nice to meet you, ${userName}! Call me Wizard... \n
I can show you real magic! All i need is two numbers.`);

// строчка 7-8: превратила значение переменной в число в момент инициализации
const firstNumber = +prompt("Give me first number, please:");
const secondNumber = +prompt("And second number, please:");

const sumNumbers = firstNumber + secondNumber;
const diffNumbers = firstNumber - secondNumber;
const multNumbers = firstNumber * secondNumber;
const divNumbers = firstNumber / secondNumber;

// строчка 16-19: записала в переменную сообщения, которые нужно выводить в консоле и алерте
const actionPlus = `${firstNumber} + ${secondNumber} = ${sumNumbers}`;
const actionMinus = `${firstNumber} - ${secondNumber} = ${diffNumbers}`;
const actionMultiply = `${firstNumber} * ${secondNumber} = ${multNumbers}`;
const actionDevide = `${firstNumber} / ${secondNumber} = ${divNumbers}`;

alert(`Bibbidi-Bobbidi-Boo...! \n
${actionPlus} \n 
${actionMinus} \n 
${actionMultiply} \n
${actionDevide}`);

console.log(actionPlus);
console.log(actionMinus);
console.log(actionMultiply);
console.log(actionDevide);

alert(`Good luck, ${userName}!`);
