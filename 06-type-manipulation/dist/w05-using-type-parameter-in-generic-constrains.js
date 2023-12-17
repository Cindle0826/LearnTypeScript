"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// key 代表 必須是 Type 裡面的一種屬性
function getProperty(obj, key) {
    return obj[key];
}
const obj = { name: "hello", age: 10 };
const a = getProperty(obj, "name");
console.log(a);
exports.default = {};
