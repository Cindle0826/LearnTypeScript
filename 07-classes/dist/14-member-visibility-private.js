"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    constructor() {
        this.x = 0;
    }
    printX() {
        console.log(this.x);
    }
}
class Derived extends Base {
    showX() {
        // console.log(this.x);
    }
}
class A {
    constructor() {
        this.x = 10;
    }
    sameAs(other) {
        return other.x === this.x;
    }
}
exports.default = {};
