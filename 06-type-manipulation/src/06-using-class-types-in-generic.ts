// 工廠函數 除入構造函數 並且創建他 
function create<Type>(c: { new (): Type }): Type {
    return new c();
}

class BeeKeeper {
    hasMask: boolean = true
}

class ZooKeeper {
    nametag: string = 'Yun'
}

class Animal {
    numLegs: number = 4
}

class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper()
}

class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper()
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Bee).keeper.hasMask
createInstance(Lion).keeper.nametag

export default {};