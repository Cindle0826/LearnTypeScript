"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function doSomething(fn) {
    console.log(fn.description + ' returnted ' + fn(6));
    fn(["1213"]);
}
function fn1(n) {
    if (typeof n === 'number') {
        console.log(n);
        return true;
    }
    else {
        console.log(n);
    }
}
fn1.description = 'Hello';
doSomething(fn1);
exports.default = {};
