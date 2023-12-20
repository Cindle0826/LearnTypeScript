"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const someClass = class {
    constructor(value) {
        this.content = value;
    }
};
const m = new someClass('Hello');
console.log(m);
exports.default = {};
