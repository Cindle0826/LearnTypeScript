"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    printName() {
        console.log(this.getName());
    }
}
class Derived extends Base {
    getName() {
        return 'world';
    }
}
const b = new Derived();
function greet(ctor) {
    const instance = new ctor();
    instance.printName();
}
greet(Derived);
exports.default = {};
