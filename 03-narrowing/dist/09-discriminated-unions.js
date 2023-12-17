"use strict";
// interface Shape {
//     kind : 'circle' | 'square'
//     redius?: number
//     sideLength?: number
// }
Object.defineProperty(exports, "__esModule", { value: true });
function getArea(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.sideLength ** 2;
    }
}
console.log(Math.floor(getArea({ kind: 'circle', radius: 10 })));
exports.default = {};
