const students = require('../../Clase 01/tasks/conditional_sentences/db');

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
  };

// Some method
  var someMethod = async function() {
    var promise = new Promise(function(resolve, reject){
       setTimeout(function() {
          console.log('Some method');
          resolve('Test');
       }, 2500);
    });
    return promise;
 };

// Function that evaluates score of each student
var approvedStudents = async function(data, score) {
    let approvedStudents = [];
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            data.forEach(student => {
                if (student.score >= score) {
                    approvedStudents.push(student);
                };
            });
            resolve(approvedStudents);
            console.log('-- The first function has finished --');
        }, 2000);
    });
    return promise;
};

// Function that normalize name and lastname of each student
var normalizeNames = async function(data) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            data.forEach(student => {
                student.name = capitalizeFirstLetter(student.name);
                student.lastname = capitalizeFirstLetter(student.lastname);
            })
            resolve(data);
            console.log('-- The second function has finished --');
        }, 2000);
    });
    return promise;
};

// Function that sort by ascending order the list of students
var sortStudents = async function(data) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            data.sort((a, b) => a.score - b.score)
            console.log('-- The third function has finished --');
            console.log('Final result: ', data);
            resolve('Test');
        }, 2000);
    });
    return promise;
};


Promise.all([approvedStudents(students, 4).then(normalizeNames).then(sortStudents), someMethod()]).then(function() {
    console.log('All promises were finalized')
})