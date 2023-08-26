// learning interface
// as we see this is type safety!!
export interface User {
  // if we want it to be optional we can add a "?" behing the property name
  name?: string;
  age?: number;
  id?: number;
  email?: string;

  //
}

let user: User = {
  name: "john",
  id: 1,
  email: "",
};

/**
 * how to access the properties:
 * 1. user.name
 * 2.user.id
 * 3.user.email etc etc
 */

// way to write in a single line ( Object DESTRUCTURING)
// let { name,email} : User = { name:"John",id:1,email:""}

interface Employees extends User {
  salary: number;
}

let empLoyee: Employees = {
  name: "ben",
  salary: 10,
  email: "",
};

// interfaces can have method definations

export interface Login {
  Login(): User;
}

// array destructuring

let users: User[] = [
  { name: "John", id: 1, email: "" },
  { name: "Arber", id: 2 },
  { name: "Beni", id: 3, email: "" },
];

// to desstructure the array we do like this: 

let [user1,user2, ...restUsers]: User[] = [
    { name: "John", id: 1, email: "" },
    { name: "Arber", id: 2 ,email:""},
    { name: "Beni", id: 3, email: "" },    { name: "Beni", id: 3, email: "" },
    { name: "Beni", id: 3, email: "" },
    { name: "Beni", id: 3, email: "" },
    { name: "Beni", id: 3, email: "" },

  ];

  console.log("user 1:",user1);
  console.log("user 2:",user2);
  console.log("the rest of users:",restUsers);
  
  