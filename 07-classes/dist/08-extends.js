"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    move() {
        console.log('Moving along ...');
    }
}
class Dog extends Animal {
    woof(times) {
        for (let i = 0; i < times; i++) {
            console.log('woof!');
        }
    }
}
exports.default = {};
