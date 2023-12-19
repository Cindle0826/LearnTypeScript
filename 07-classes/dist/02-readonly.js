"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Gretter {
    constructor(str) {
        this.name = 'world';
        if (str !== undefined) {
            this.name = str;
        }
    }
    err() {
        // readonly 不能修改
        // this.name = 'not ok' 
    }
}
exports.default = {};
