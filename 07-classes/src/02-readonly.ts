class Gretter {
    readonly name: string = 'world'

    constructor(str?: string) {
        if (str !== undefined) {
            this.name = str
        }
    }

    err() {
        // readonly 不能修改
        // this.name = 'not ok' 
    }
}

export default {}