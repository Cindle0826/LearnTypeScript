"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abosulte = exports.RandomNumberGenerator = exports.phi = exports.squareTwo = exports.pi = void 0;
exports.pi = 3.14;
exports.squareTwo = 1.41;
exports.phi = 1.61;
class RandomNumberGenerator {
}
exports.RandomNumberGenerator = RandomNumberGenerator;
function abosulte(num) {
    if (num < 0)
        return num * -1;
    return num;
}
exports.abosulte = abosulte;
