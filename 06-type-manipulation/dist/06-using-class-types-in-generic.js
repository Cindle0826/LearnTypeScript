"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 工廠函數 除入構造函數 並且創建他 
function create(c) {
    return new c();
}
class BeeKeeper {
    constructor() {
        this.hasMask = true;
    }
}
class ZooKeeper {
    constructor() {
        this.nametag = 'Yun';
    }
}
class Animal {
    constructor() {
        this.numLegs = 4;
    }
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new BeeKeeper();
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new ZooKeeper();
    }
}
function createInstance(c) {
    return new c();
}
createInstance(Bee).keeper.hasMask;
createInstance(Lion).keeper.nametag;
exports.default = {};
