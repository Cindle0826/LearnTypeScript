abstract class Base {
    abstract getName(): string

    printName() {
        console.log(this.getName());
    }
}

class Derived extends Base {
    getName(): string {
        return 'world'
    }
}

const b = new Derived()

function greet(ctor: new () => Base) {
    const instance = new ctor()
    instance.printName()
}

greet(Derived);

export default {}