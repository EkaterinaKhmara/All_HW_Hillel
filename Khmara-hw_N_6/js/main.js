app()

function app() {
  let quantityStudents;
  do {
    quantityStudents = +prompt("How many students are there in group?");
  } while(isNaN(quantityStudents) || quantityStudents == 0);

  const studentsList = getSolution(quantityStudents);

  alert(studentsToString(studentsList));
  
  middScoreAllStudents(studentsList);

  do{
    const menuItem = +prompt(`Choose an operation:
    1: Get the best-performing student
    2: Sort the students by their grades
    3: Get an average grade for each student
    4: Get a list of students to drop
    5: Add a new student to the group
    6: Add a new ramdom student to the group`);

    getResultMenuItem(menuItem, studentsList);
  } while (confirm("Would you like to continue the operation?"));
  
}
