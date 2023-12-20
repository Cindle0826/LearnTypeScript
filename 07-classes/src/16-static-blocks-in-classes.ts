class Foo {
    static #count = 0

    get count(){
        return Foo.#count
    }

    static {
        try {
            const lastInstance = {
                length: 100
            }
            console.log('Hello');
            
            Foo.#count += lastInstance.length
        }
        catch{}
    }
}

const f = new Foo();

export default {};