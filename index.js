// function greetTheStudent(studentName){ //parameter // named function
//     return `Hello there ${studentName}`;
// }
// const greetTheStudent = function (studentName){ //parameter // anonymous function
//     return `Hello there ${studentName}`;
// }

// fat arrow function
// const greetTheStudent = (studentName)=>{ //parameter // anonymous function
//     return `Hello there ${studentName}`;
// }

//const greetTheStudent = studentName => `Hello there ${studentName}`;

const greetTheStudent = (studentName)=> `Hello there ${studentName}`;

// const fullName = function (firstName, middleName, lastName){
//     return `${lastName}, ${middleName}, ${firstName}`;
// }

// const fullName = (firstName, middleName, lastName) =>{
//     return `${lastName}, ${middleName}, ${firstName}`;
// }

const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}, ${firstName}`;


// const studentName = 'Mary Jane';
// const greet = greetTheStudent(studentName); //argument
// console.log(greet);

const titleName = fullName('Mary', 'R', 'Jane');
console.log(titleName);