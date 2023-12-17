// 匿名別名
function greet(person: {name: string, age: number}) {
    return 'hello' + person.name;
}

// 接口別面
interface Person {
    name: string
    age: number
}

function greet1(person: Person) {
    return 'hello' + person.name;
}

// 類型別名
type Person2 =  {
    name: string
    age: number
}

function greet2(person: Person2) {
    return 'hello' + person.name;
}
