"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
class Employee {
    // static method
    static getEmployeCount() {
        return 50;
    }
    constructor(id, name, address) {
        // whenever we add '#' or "private" we can't see anymore the id(becomes private)
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f"),
            this.name = name,
            this.address = address;
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
