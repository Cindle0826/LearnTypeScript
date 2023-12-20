"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    static getGreeting() {
        return 'Hello World';
    }
}
class Dervied extends Base {
    constructor() {
        super(...arguments);
        this.myGreeting = Dervied.getGreeting();
    }
}
exports.default = {};
