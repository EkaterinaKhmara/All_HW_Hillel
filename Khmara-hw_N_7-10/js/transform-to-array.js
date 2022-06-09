const qttStudents = 8;

const studentsArr = studentsMock.getStudentList(qttStudents);

const names = studentsArr.map(val => val.name);

console.log('Task N8: Transforming names into an array = Before = ');
console.log(studentsArr);
console.log('Task N8: Transforming names into an array = After = ');
console.log(names);