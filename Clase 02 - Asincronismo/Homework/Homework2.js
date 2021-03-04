const students = require('../../Clase 01/tasks/conditional_sentences/db');

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
  };

  var someMethod = async function() {
    var promise = new Promise(function(resolve, reject){
       setTimeout(function() {
          console.log('Some method');
          resolve('Test');
       }, 3000);
    });
    return promise;
 };

// Function that evaluates score of each student
let studentsList = [];
var approvedStudents = async function(data, score) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            data.forEach(student => {
                if (student.score >= score) {
                    studentsList.push(student);
                };
            });
            resolve(studentsList);
            console.log('-- The first function has finished --');
        }, 2000);
    });
    return promise;
};

// Function that normalize name and lastname of each student
var normalizeNames = async function() {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            studentsList.forEach(student => {
                student.name = capitalizeFirstLetter(student.name);
                student.lastname = capitalizeFirstLetter(student.lastname);
            })
            resolve(studentsList);
            console.log('-- The second function has finished --');
        }, 4000);
    });
    return promise;
};

// Function that sort by ascending order the list of students
var sortStudents = async function() {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            studentsList.sort((a, b) => a.score - b.score)
            console.log('Final result: ', studentsList);
            resolve('Ready');
            console.log('-- The third function has finished --');
        }, 6000);
    });
    return promise;
};


Promise.all([approvedStudents(students, 4), normalizeNames(), sortStudents(), someMethod()])
.then(function(){
    console.log('All promises were finalized'); //un arreglo con los valores pasamos a resolve en cada metodo
});