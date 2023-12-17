"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = undefined;
let y = null;
function doSomething(x) {
    if (x === null) {
        console.log('gg');
    }
    else {
        console.log('Hello, ' + x.toUpperCase());
    }
}
function liveDangrously(x) {
    console.log(x.toFixed());
}
liveDangrously(123);
