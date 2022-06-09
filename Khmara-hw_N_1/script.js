alert("Hello dear guest!");

let userName = prompt("What is your name?");

alert("Nice to meet you, " + userName + "!");

let userAge = prompt("How old are you?");

// вызываем встроеный обьект Date в конструкторе new Date() - узнаем текущие дату и время
let currentDate = new Date();

let currentYear = currentDate.getFullYear();

let bornYear = currentYear - userAge;

alert("Congratulations, your year of birth " + bornYear + "!");

alert("Good luck!");
