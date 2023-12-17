"use strict";
// 函數的多載
Object.defineProperty(exports, "__esModule", { value: true });
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    return new Date(mOrTimestamp);
}
makeDate(5, 6, 7);
makeDate(10);
exports.default = {};
