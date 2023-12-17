"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ctor {
    constructor(s) {
        this.s = s;
    }
}
function fn(ctor) {
    return new ctor('Hello');
}
const f = fn(Ctor);
console.log(f.s);
function fn1(date) {
    let d = new date('2021-12-20');
}
fn1(Date);
exports.default = {};
