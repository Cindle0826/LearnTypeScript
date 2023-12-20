"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 類型的比較 同屬性不同名的屬性
class Person {
    constructor() {
        this.name = '';
        this.age = 100;
    }
}
class Emplyee {
    constructor() {
        this.name = 'felixlu';
        this.age = 23;
        this.salary = 10;
    }
}
const p = new Emplyee();
class Empty {
}
function fn(x) { }
// 類的屬性如果為空 那所有的物件都能傳入 
fn(window);
fn({});
fn(fn);
fn(100);
exports.default = {};
