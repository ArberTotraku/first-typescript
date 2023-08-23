"use strict";
let lname;
lname = "Arber";
let newname = lname.toUpperCase();
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
let empList;
empList = ["Arber", "Arber1", "Arber2"];
let numList;
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
let emp = empList.find((emp) => emp === "Arber");
let sum = numList.reduce((acc, num) => acc + num);
console.log(results);
console.log("employer:", emp);
console.log('sum', sum);
let c = 2 /* Color.Blue */;
// tuple-s
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
// any 
// any shouldn't be used by used
let departament;
departament = "It";
departament = 10;
