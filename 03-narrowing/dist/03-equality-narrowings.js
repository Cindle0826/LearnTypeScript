"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mulitplyValue(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}
// mulitplyValue({value : 5}, 6);
mulitplyValue({ value: undefined }, 6);
exports.default = {};
