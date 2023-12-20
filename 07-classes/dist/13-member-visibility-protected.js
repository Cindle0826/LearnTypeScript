"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Greeter {
    greet() {
        console.log(this.getName());
    }
    getName() {
        return 'hello';
    }
}
class SpecialGretter extends Greeter {
    howdy() {
        console.log(this.getName());
    }
}
const g = new SpecialGretter();
g.greet();
g.howdy();
exports.default = {};
