"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getArea(shape) {
    switch (shape.kind) {
        case 'circle': return Math.PI * shape.radius ** 2;
        case 'square': return shape.sideLength ** 2;
        default:
            return shape.sideLength;
    }
}
console.log(Math.floor(getArea({ kind: 'circle', radius: 10 })));
exports.default = {};
