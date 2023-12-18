"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createLabel(idOrName) {
    if (typeof idOrName === 'string') {
        return { name: idOrName };
    }
    else {
        return { id: idOrName };
    }
}
// type a = NameLabel
let a = createLabel('hello');
console.log(a);
// type b = IdLabel
let b = createLabel(10);
console.log(b);
// type c = NameLabel | IdLabel
let c = createLabel(Math.random() < 0.5 ? 'hello' : 10);
console.log(c);
exports.default = {};
