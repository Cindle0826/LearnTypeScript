"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AnimalImpl {
    constructor(s) {
        this.name = s;
    }
}
const AnimalConstructorImpl = AnimalImpl;
const animalInstance = new AnimalConstructorImpl("Lion");
console.log(animalInstance.name); // Output: Lion
const result = AnimalConstructorImpl(42);
console.log(result); // Output: 42
exports.default = {};
