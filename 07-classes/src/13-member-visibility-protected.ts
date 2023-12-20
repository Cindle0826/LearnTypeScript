class Greeter {
    public greet(){
        console.log(this.getName());
    }

    protected getName(): string{
        return 'hello'
    }
}

class SpecialGretter extends Greeter {
    public howdy() {
        console.log(this.getName());
    }
}

const g = new SpecialGretter()
g.greet()
g.howdy()


export default {}