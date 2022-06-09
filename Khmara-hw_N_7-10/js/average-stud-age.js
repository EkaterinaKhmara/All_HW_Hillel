const qttStud = 10;

const arrStudents = studentsMock.getStudentList(qttStud);

let middleAllMarks = arrStudents.map(val => {
  const sum = val.marks.reduce((acc, elem) => acc + elem, 0);
  return Math.floor(sum / val.marks.length);
});

let sumMiddleMarks = middleAllMarks.reduce((acc, elem) => acc + elem, 0);

const middleMark = Math.floor(sumMiddleMarks / middleAllMarks.length);

console.log('Task N9: Average age?(mark) of students = ' + middleMark);