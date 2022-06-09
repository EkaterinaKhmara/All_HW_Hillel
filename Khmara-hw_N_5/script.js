const quantityMarks = 8;

app()

function app() {
  let quantityStudents;
  do {
    quantityStudents = +prompt("How many students are there in group?");
  } while(isNaN(quantityStudents) || quantityStudents == 0);

  const studentsList = getStudentsName(quantityStudents);

  alert(studentsToString(studentsList));
  
  middScoreAllStudents(studentsList);

  do{
    const menuItem = +prompt(`Choose an operation:
    1: Get the best-performing student
    2: Sort the students by their grades
    3: Get an average grade for each student
    4: Get a list of students to drop
    5: Add a new student to the group`);

    getResultMenuItem(menuItem, studentsList);
  } while (confirm("Would you like to continue the operation?"));
  
}

function getStudentsName(quantityStudents) {
  const arrStudentsInfo = [];
  for (let i = 0; i < quantityStudents; i++) {
    let studentsName = prompt("Enter the student's name");
    arrStudentsInfo.push(
      {
        name: studentsName, 
        score: getRandomInt(1, 12)
      }
    );
  }
  return arrStudentsInfo;
}

function getRandomInt(min, max) {
  let arrScore = [];
  for (let i = 0; i < quantityMarks; i++ ) {
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    arrScore.push(randomNum);
  }
  return arrScore;
}

function middleScore(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return Math.floor(sum/arr.length);
}

function middScoreAllStudents(studentsList) {
  for(let i = 0; i < studentsList.length; i++){
    studentsList[i]['middleScore'] = middleScore(studentsList[i].score);
  }
}

function findBestStudent(studentsList) {
  let maxValue = studentsList[0];
  for(let i = 1; i < studentsList.length; i++){
    if(maxValue.middleScore < studentsList[i].middleScore){
      maxValue = studentsList[i];
    }
  }
  return maxValue;
}

function findBadStudents(studentsList) {
  let tempArr = [];
  for(let i = 0; i < studentsList.length; i++){
    const temp = studentsList[i].middleScore;
    if(temp < 5){
      tempArr.push(studentsList[i])
    }
  }
  return tempArr;
}

function studentToString(student) {
  if(student.middleScore){
    return `${student.name} - score: ${student.score} - middle score: ${student.middleScore} \n`
  } else {
    return `${student.name} - score: ${student.score} \n`;
  }
}

function studentsToString(studentsList){
  let studentsOutput = "";
  for(let i = 0; i < studentsList.length; i++){
    studentsOutput += studentToString(studentsList[i]);
  }
  return studentsOutput;
}

function sortStudentsByGrades(studentsList) {
  let numLength = studentsList.length;
  for (let i = 0; i < numLength; i++) {
    for (let o = 1; o < (numLength - i); o++) {
      if (studentsList[o - 1].middleScore > studentsList[o].middleScore) {
        let temp = studentsList[o - 1];
        studentsList[o - 1] = studentsList[o];
        studentsList[o] = temp;
      }
    }
  }
  return studentsList.reverse();
};

function newStudent(studentsList){
  let nameStudent = prompt("Enter the name new student");
  let score = getRandomInt(1, 12);
  studentsList.push(
  {
    name: nameStudent, 
    score: score,
    middleScore: middleScore(score)
  });
  return studentsList;
}

function getResultMenuItem(menuItem, studentsList){
  if (menuItem != menuItem || menuItem == 0 || menuItem >= 6) {
    alert("ERROR. No such operation. Try again, please.");
  } else if (menuItem <= 5) {
    switch (menuItem) {
      case 1: 
        alert(studentToString(findBestStudent(studentsList)));
        break;
      case 2: 
        alert(studentsToString(sortStudentsByGrades(studentsList)));
        break;
      case 3: 
        alert(studentsToString(studentsList));
        break;
      case 4:
        alert(studentsToString(findBadStudents(studentsList)));
        break;
      case 5: 
        alert(studentsToString(newStudent(studentsList)));
        break;
    }
  }
}
