const students = require('./db');
const noteToApprove = 4;
let studentsApproved = [];

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.substring(1).toLowerCase();
};

// Function that evaluates, normalizes and sorts score of each student
function approvedStudent(student) {
  if (student.score >= noteToApprove) {
    studentsApproved.push(normalizeNames(student))
    studentsApproved.sort((a, b) => a.score - b.score)
  };
};

// Function to normalize names
function normalizeNames(student) {
  return {
    ...student,
    lastname: capitalizeFirstLetter(student.lastname),
    name: capitalizeFirstLetter(student.name),
  };
};

// ============= FOR =============

function approvedUsingFor(studentsList) {
  studentsList.forEach(student => {
    approvedStudent(student);
  });
};

// ============= WHILE =============

let count = 0;
function approvedUsingWhile(studentsList = Students) {
  while (count < studentsList.length) {
    approvedStudent(studentsList[count]);
    count++;
  };
};

// ============= DO/WHILE =============
function approvedUsingDoWhile(studentsList = Students) {
  do {
    approvedStudent(studentsList[count]);
    count++;
  } while(count < studentsList.length);
};

// ============= RESULTS (ejecute one at a time) =============
approvedUsingFor(students)
// approvedUsingWhile(students)
// approvedUsingDoWhile(students)

console.log(studentsApproved)
// ===========================================================
