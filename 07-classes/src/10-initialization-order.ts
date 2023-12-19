// 優先順序 先載入 super Class => this Class
class Base {
    name = 'base'

    constructor() {
        console.log("My name is " + this.name);
    }
}

class Derived extends Base {
    name: string = 'derived'

    constructor(){
        super()
        console.log(this.name);
    }
}

const d = new Derived()

export default {};