"use strict";
// 屬性修改器
Object.defineProperty(exports, "__esModule", { value: true });
// function paintShape(opts: PaintOptions) {
//     console.log(opts.shape, opts.xPos, opts.yPos);
// }
function paintShape({ shape, xPos = 0, yPos = 0 }) {
    console.log(xPos);
}
const shape = {};
paintShape({ shape });
paintShape({ shape, xPos: 10, yPos: 20 });
exports.default = {};
