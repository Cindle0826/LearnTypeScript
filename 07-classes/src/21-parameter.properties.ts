class Params {
    constructor(public readonly x: number, protected y: number, private z: number) {
        this.x = x
    }
}

const p = new Params(100, 200, 300)
console.log(p.x);

export default {}