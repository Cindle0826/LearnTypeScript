"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greeter(fn) {
    console.log(fn('Hello World'));
}
function printToConsole(s) {
    return s;
}
greeter(printToConsole);
exports.default = {};
