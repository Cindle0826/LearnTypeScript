"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = __importDefault(require("./hello"));
const maths_1 = require("./maths");
(0, hello_1.default)();
console.log(maths_1.pi);
console.log((0, maths_1.abosulte)(maths_1.phi));
