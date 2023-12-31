"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    // get and set methods
    // get method
    get empID() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    // set method
    // ATTENTION: properties should be inside the parathentesis
    set empID(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    // static method
    static getEmployeCount() {
        return 50;
    }
    constructor(id, name, address) {
        // whenever we add '#' or "private" we can't see anymore the id(becomes private)
        _Employee_id.set(this, void 0);
        (__classPrivateFieldSet(this, _Employee_id, id, "f")), (this.name = name), (this.address = address);
    }
    Login() {
        return { name: "john", id: 1, email: "" };
    }
    // methods
    getNameWithAddress() {
        // one way   return this.name + " " + this.address
        return `${this.name} stays at ${this.address}`;
    }
}
_Employee_id = new WeakMap();
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
    constructor(id, name, address) {
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
