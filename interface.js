"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "john",
    id: 1,
    email: "",
};
let empLoyee = {
    name: "ben",
    salary: 10,
    email: "",
};
// array destructuring
let users = [
    { name: "John", id: 1, email: "" },
    { name: "Arber", id: 2 },
    { name: "Beni", id: 3, email: "" },
];
// to desstructure the array we do like this: 
let [user1, user2, ...restUsers] = [
    { name: "John", id: 1, email: "" },
    { name: "Arber", id: 2, email: "" },
    { name: "Beni", id: 3, email: "" }, { name: "Beni", id: 3, email: "" },
    { name: "Beni", id: 3, email: "" },
    { name: "Beni", id: 3, email: "" },
    { name: "Beni", id: 3, email: "" },
];
console.log("user 1:", user1);
console.log("user 2:", user2);
console.log("the rest of users:", restUsers);
