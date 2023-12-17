interface StringArray {
    [index: symbol]: string
}

const mySymbol = Symbol('one');
const myArray: StringArray = {[mySymbol] : 'a'}
const secondItem = myArray[mySymbol]

console.log(secondItem);

interface Animal {
    name: string
}

interface Dog extends Animal {
    breed: string
}

interface NotOkay {
    [index: string | number] : string | number,
    length: number,
    name: string
}

let notOkay: NotOkay = {
    length: 100,
    name: "Hello",
    "0": "Hello"
}

interface ReadOnlyStringArray {
    readonly [index: number] : string
}

let myArray2: ReadOnlyStringArray = ['a', 'b'];

export default {};