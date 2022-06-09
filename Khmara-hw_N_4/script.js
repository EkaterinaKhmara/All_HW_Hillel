let firstOperand, secondOperand, operandCosSin, operationContin, result;
let resultHistory = [];

do {
  let operator = +prompt(`Hello! What operation for calculation you want to do? 
  Choose a number: 
    1: +
    2: -
    3: /
    4: *
    5: %
    6: pow
    7: cos
    8: sin
    9: View the latest calculation results`);

  if (operator != operator || operator == 0 || operator >= 10) {
    alert("ERROR. No such operation. Try again, please.");
  } else if (operator <= 6) {
      do {
      firstOperand = +prompt("Now - give me first number, please:");
      } while(isNaN(firstOperand));
    do{
      secondOperand = +prompt("And second number, please:");
    } while(isNaN(secondOperand));
        if(firstOperand != firstOperand || secondOperand != secondOperand){
          alert("ERROR. Your entry not a number. Try again, please.");
        } else {
          switch (operator) {
            case 1:
              alert(result = `${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`);
              break;
            case 2:
              alert(result = `${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`);
              break;
            case 3:
              alert(result = `${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`);
              break;
            case 4:
              alert(result = `${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`);
              break;
            case 5:
              alert(result = `${firstOperand} % ${secondOperand} = ${firstOperand % secondOperand}`);
              break;
            case 6:
              alert(result = `${firstOperand} ** ${secondOperand} = ${firstOperand ** secondOperand}`);
              break;
          }
        }
  } else if (operator == 7 || operator == 8 ) {
    do{
      operandCosSin = +prompt("Now - give me number, please:");
    } while(isNaN(operandCosSin));
        if(operandCosSin != operandCosSin){
          alert("ERROR. Your entry not a number. Try again, please.");
        } else {
          switch (operator) {
            case 7:
              alert(result = `sin(${operandCosSin}) is ${Math.sin(operandCosSin)}`);
              break;
            case 8:
              alert(result = `cos(${operandCosSin}) is ${Math.cos(operandCosSin)}`);
              break;
          }
        }
  } else {
    alert(`Your last operation results: ${resultHistory}`)
  }
    resultHistory.push(` ${result} `);
} while (confirm("Would you like to continue the operation?"));