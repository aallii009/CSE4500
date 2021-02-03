const student = {
	name: "Ali",
	age: 23
}


//Create an object to hold the string value of student
const studentObjToString = JSON.stringify(student);

console.log(typeof studentObjToString);

//Puts the string student inside of local storage as key value pair
localStorage.setItem('student', studentObjToString);

//turn the string back into a JSON object and store it
const toJSONStudent = JSON.parse(studentObjToString);

console.log(typeof toJSONStudent);

