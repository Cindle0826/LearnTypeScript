"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
exports.default = {};
