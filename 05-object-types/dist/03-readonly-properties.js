"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function doSomething(obj) {
    console.log(obj.prop);
    // obj.prop = 'hello'
}
function visitForBirthday(home) {
    console.log(home.resident.name);
}
let writablePerson = {
    name: 'Felix',
    age: 18
};
let readOnlyPerson = writablePerson;
console.log(readOnlyPerson.age);
writablePerson.age++;
console.log(readOnlyPerson.age);
exports.default = {};
