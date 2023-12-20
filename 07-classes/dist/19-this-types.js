"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    constructor() {
        this.content = '';
    }
    sameAs(other) {
        return other.content === this.content;
    }
}
class DerivedBox extends Box {
    constructor() {
        super(...arguments);
        this.otherContent = '?';
    }
}
const base = new Box();
const derived = new DerivedBox();
// derived.sameAs(base)
exports.default = {};
