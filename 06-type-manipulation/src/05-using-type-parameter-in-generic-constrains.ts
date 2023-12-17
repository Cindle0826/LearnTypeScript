// key 代表 必須是 Type 裡面的一種屬性
function getProperty<E, K extends keyof E>(obj: E, key: K): E[K] {
    return obj[key]
}

const obj = {name : "hello", age : 10};

const a = getProperty(obj, "name");

type Person = {
    name: string
    age: number
}

type MyRecord<T, K extends keyof T> = {  
    [P in K]: T[K]
}

type Name = {
    name: string
}

const gg:MyRecord<Name, keyof Name> = {
    name : "10"
}


export default {};