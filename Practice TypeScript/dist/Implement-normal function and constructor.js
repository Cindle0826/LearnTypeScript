"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MyClass(initValue) {
    this.property = initValue;
}
function MyConstructor(initValue) {
    if (typeof initValue === 'string') {
        this.s = initValue;
        return new MyClass(initValue);
    }
    else {
        return initValue;
    }
}
const instance = new MyConstructor("success!");
console.log(instance.property);
const result = MyConstructor(42);
console.log(result);
exports.default = {};
