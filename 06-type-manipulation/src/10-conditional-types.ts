// 透過條件取得類型
interface Animal {
    live(): void
}

interface Dog extends Animal {
    woof(): void
}

// type Example1 = number
type Example1 = Dog extends Animal ? number : string

// type Example1 = number
type Example2 = RegExp extends Animal ? number : string



interface IdLabel {
    id: number
}

interface NameLabel {
    name: string
}

// function createLabel(id: number): IdLabel
// function createLabel(name: string): NameLabel
// function createLabel(nameOrId: string | number): IdLabel | NameLabel
// function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//     throw ''
// }

// 使用條件類型 改寫 函數重載 
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel

function createLabel<T extends number | string> (idOrName: T): NameOrId<T> {
    if (typeof idOrName === 'string') {
        return { name : idOrName} as NameOrId<T>;
    } else {
        return { id : idOrName} as NameOrId<T>; 
    }
}

// type a = NameLabel
let a = createLabel('hello');
console.log(a);


// type b = IdLabel
let b = createLabel(10);
console.log(b);

// type c = NameLabel | IdLabel
let c = createLabel(Math.random() < 0.5 ? 'hello' : 10);
console.log(c);

export default {};