class Greeter {
    public greet() {
        console.log('Hi');
    }

    sayHello() {
        this.greet()
    }
}

class Hello extends Greeter {
    constructor(){
        super()
        super.greet();
    }
}

const g = new Greeter()
g.greet()
g.sayHello();

export default {}