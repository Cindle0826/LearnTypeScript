"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function example() {
    let x;
    x = Math.random() < 0.5;
    console.log(x);
    if (Math.random() < 0.5) {
        x = 'hello';
        console.log(x);
    }
    else {
        x = 100;
        console.log(x);
    }
    return x;
}
let x = example();
x = 1;
x = 'abc';
exports.default = {};
