"use strict";
// 當設計一個回掉函數時, 回掉函數的 傳入值永遠不要設計為可選， 除非可選的儲入值有設定預設值
Object.defineProperty(exports, "__esModule", { value: true });
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        // callback(arr[i]);
    }
}
myForEach([1, 2, 3], (a, i) => {
    // console.log(i.toFixed());
});
const arr = [10, 20, 30];
exports.default = {};
