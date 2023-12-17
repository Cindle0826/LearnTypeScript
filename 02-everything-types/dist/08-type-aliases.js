"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizedInput = exports.printId = void 0;
function printCoord(pt) {
    console.log(pt);
}
printCoord({ x: 100, y: 10 });
function printId(id) {
    console.log(id);
}
exports.printId = printId;
printId(10);
const sanitizedInput = (str) => {
    return str.slice(3);
};
exports.sanitizedInput = sanitizedInput;
console.log((0, exports.sanitizedInput)('abcdef'));
