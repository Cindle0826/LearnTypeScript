"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyClass {
    constructor() {
        this.name = 'MyClass';
    }
    getName() {
        return this.name;
    }
}
const c = new MyClass();
const obj = {
    name: 'obj',
    getName: c.getName
};
console.log(obj.getName());
exports.default = {};
