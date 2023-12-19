"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 優先順序 先載入 super Class => this Class
class Base {
    constructor() {
        this.name = 'base';
        console.log("My name is " + this.name);
    }
}
class Derived extends Base {
    constructor() {
        super();
        this.name = 'derived';
        console.log(this.name);
    }
}
const d = new Derived();
exports.default = {};
