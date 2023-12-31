class Base {
    private x = 0

    printX() {
        console.log(this.x);
    }
}

class Derived extends Base {
    showX() {
        // console.log(this.x);
    }
}

class A {
    private x = 10
    
    public sameAs(other: A) {
        return other.x === this.x;
    }
}

export default {}