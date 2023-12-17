"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printAll(strs) {
    if (strs && typeof strs === 'object') {
    }
    else if (typeof strs === 'string') {
    }
    else {
    }
}
function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map((x) => {
            return x * factor;
        });
    }
}
console.log(multiplyAll([1, 2, 3], 10));
exports.default = {};
