import { Login, User } from "./interface";



class Employee implements Login {
  // whenever we add '#' or "private" we can't see anymore the id(becomes private)
  #id: number;
  // adding 'protected doesn't allow to extend this'
  protected name: string;
  address: string;

  // get and set methods

  // get method
  get empID(): number {
    return this.#id;
  }

  // set method
  // ATTENTION: properties should be inside the parathentesis
  set empID(id: number) {
    this.#id = id;
  }

  // static method
  static getEmployeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: string) {
    (this.#id = id), (this.name = name), (this.address = address);
  }

  Login(): User {
    return { name: "john", id: 1, email: "" };
  }
  // methods
  getNameWithAddress(): string {
    // one way   return this.name + " " + this.address
    return `${this.name} stays at ${this.address}`;
  }
}
// instance of classes
let john = new Employee(1, "John", "Germany");

john.empID = 100;

console.log("john's id:", john.empID);

// we can call this function without having the need to create an instance
console.log(Employee.getEmployeCount());

// john.id = 1;
// john.name = "John"
// john.address = "germany 10";

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    // we have to use super otherwise will be an error
    super(id, name, address);
  }
}

let address = john.getNameWithAddress();

console.log(john);

// Classes is responsible for bussines logic :
// We will use in Angular classes for fetching data from backend

let mike = new Manager(2, "Mike", "Berlin");

// it will take the parent class properties so log would be: Mike stays at Berlin
console.log(mike.getNameWithAddress());
