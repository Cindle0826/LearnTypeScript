"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
let testStr = 'Hello World';
testStr = 'yun';
const constStr = 'Hello World';
exports.x = '123';
function printText(s, alignment) {
    console.log(s + " --- " + alignment);
}
printText('Hello', 'Left');
printText('Hello', 'Right');
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
    console.log(x);
}
configure({ width: 10 });
function handleRequest(url, method) {
    console.log(url + ' --- ' + method);
}
;
const req = {
    url: 'http://example.com',
    method: 'GET'
};
handleRequest(req.url, req.method);
function aaa(x) {
}
const a = 10;
aaa(a);
exports.default = {};
