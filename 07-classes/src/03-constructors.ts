class Point {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

class Derived extends Point {
    constructor(x: number ,y: number){
        
        super(x, y);
    }
}

export default {}