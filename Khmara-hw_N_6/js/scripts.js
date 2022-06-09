const quantityMarks = 10;

function getSolution(quantityStudents){
  let questionAboutList = confirm(`Do you want to enter the list of students manually?
(If you press "cancel", the list of students will be generated automatically)`);
  let arr;
    if(questionAboutList){
      arr = getStudentsName(quantityStudents);
    }else{
      arr = getStudentsNameRand(quantityStudents)
    }

  return arr;
}

function getStudentsNameRand(quantityStudents) {
  return studentsMock.getStudentList(quantityStudents);
}

function getStudentsName(quantityStudents) {
  const arrStudentsInfo = [];
  for (let i = 0; i < quantityStudents; i++) {
    let studentsName = prompt("Enter the student's name");
    let studentsScore = prompt("Enter marks by comma");
    studentsScore = studentsScore.trim();
    let marks;

    if(studentsScore){
      marks = studentsScore.split(',');
    }else{
      marks = getRandomInt(20, 100);
    }

    const arrOfNumber = [];

    marks.forEach(str => {
      arrOfNumber.push(Number(str));
    });

    arrStudentsInfo.push(
      {
        name: studentsName, 
        marks: arrOfNumber
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
    studentsList[i]['middleScore'] = middleScore(studentsList[i].marks);
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
    if(temp < 65){
      tempArr.push(studentsList[i])
    }
  }
  return tempArr;
}

function studentToString(student) {
  if(student.middleScore){
    return `${student.name} - score: ${student.marks} - middle score: ${student.middleScore} \n`
  } else {
    return `${student.name} - score: ${student.marks} \n`;
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
  let score = prompt("Enter marks for new student by comma");
  score = score.trim();
  let marks;

  if(score){
    marks = score.split(',');
  }else{
    marks = getRandomInt(20, 100);
  }  

  const arrOfNumber = [];
  marks.forEach(str => {
    arrOfNumber.push(Number(str));
  });
  
  const student = {
    name: nameStudent, 
    marks: arrOfNumber,
    middleScore: middleScore(arrOfNumber)
  }

  studentsList.push(student);
  return student;
}

function newRandomStudent(studentsList){
  let randStudent = studentsMock.getStudent();
  randStudent['middleScore'] = middleScore(randStudent.marks);
  studentsList.push(randStudent);
  return randStudent;
}

function getResultMenuItem(menuItem, studentsList){
  if (menuItem != menuItem || menuItem == 0 || menuItem >= 7) {
    alert("ERROR. No such operation. Try again, please.");
  } else if (menuItem <= 6) {
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
        alert(studentToString(newStudent(studentsList)));
        break;
      case 6:
        alert(studentToString(newRandomStudent(studentsList)))
        break;
    }
  }
}
