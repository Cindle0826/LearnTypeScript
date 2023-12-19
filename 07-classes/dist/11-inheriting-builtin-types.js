"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 如果繼承 TS 的內建物件 Array Error map , target 在編譯 .ts 時可能會有版本兼容的問題
class MsgError extends Error {
    constructor(m) {
        super(m);
        // 明確的設置原型
        Object.setPrototypeOf(this, MsgError.prototype);
    }
    // es5 可能會報錯
    sayHello() {
        return 'hello ' + this.message;
    }
}
const msgError = new MsgError('hello');
console.log(msgError.sayHello());
exports.default = {};
