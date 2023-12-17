"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printAll(strs) {
    if (typeof strs === 'object' && strs !== null) {
        for (const str of strs) {
            console.log(str);
        }
    }
    else if (typeof strs === 'string') {
        console.log(strs);
    }
    else {
        console.log(strs);
    }
}
exports.default = {};
