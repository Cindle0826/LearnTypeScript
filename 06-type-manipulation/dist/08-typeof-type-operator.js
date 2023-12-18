"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let s = 'Hello World';
let n = 'yun';
function f() {
    return {
        x: 10,
        y: 3
    };
}
const p = { x: 100, y: 200 };
// typeof 不能去調用一個函數再調用時候的返回類型
function msgBox() { }
;
// let shouldContinue: typeof msgBox('100') // 不能調用
// let shouldContinue: typeof msgBox() // 不能傳入值
let shouldContinue;
shouldContinue = function () { };
// 透過 typeof 關鍵字獲取數組中的 value
const arr = [
    { name: 'Alice', age: 15 },
    { name: 'Bob', age: 20 },
    { name: 'Eve', age: 24 }
];
const p1 = {
    name: 'aaaa',
    age: 10
};
const age = 10;
const age2 = 24;
const key = 'age';
exports.default = {};
