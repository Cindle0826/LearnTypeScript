"use strict";
// 設計泛型函數的三個原則
// 1. 類型參數下推
function firstElement1(arr) {
    return arr[0];
}
// 2. 使用更少的類型參數
function filter1(arr, func) {
    return arr.filter(func);
}
const f1 = filter1(["10", "20"], (s) => s === '10');
console.log(f1);
function filter2(arr, func) {
    return arr.filter(func);
}
filter2(["10", "20", "30"], (s) => s === '10');
// 3. 類型參數是用來關聯多個值的類型, 如果在一個 function 中, 只會使用一次那麼就沒有必要使用他
function greet1(arg) {
    console.log(arg);
}
function greet2(s) {
    console.log(s);
}
