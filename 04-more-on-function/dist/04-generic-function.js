"use strict";
function firstElement(arr) {
    return arr[0];
}
firstElement(['a', 'b', 'c']);
function map(arr, func) {
    return arr.map(func);
}
const parsed = map(['1', '2', '3'], (n) => parseInt(n));
console.log(parsed);
