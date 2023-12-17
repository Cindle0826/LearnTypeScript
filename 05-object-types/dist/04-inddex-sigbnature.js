"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mySymbol = Symbol('one');
const myArray = { [mySymbol]: 'a' };
const secondItem = myArray[mySymbol];
console.log(secondItem);
let notOkay = {
    length: 100,
    name: "Hello",
    "0": "Hello"
};
let myArray2 = ['a', 'b'];
exports.default = {};
