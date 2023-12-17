"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenericNumber {
    constructor() {
        this.zeroValue = 0;
        this.add = (x, y) => x;
    }
}
let myGeneric = new GenericNumber();
myGeneric.zeroValue = 0;
myGeneric.add = function (x, y) {
    return x + y;
};
exports.default = {};
