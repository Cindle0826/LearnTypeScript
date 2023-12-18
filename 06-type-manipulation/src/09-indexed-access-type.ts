// 透過索引取得 value 的類型
type Person = {
    age: number
    name: string
    alive: boolean
}

type Age = Person['age']
let age: Age = 10;

type T1 = Person['age' | 'alive'];
const i11: T1 = 100
const i12: T1 = true

// type T2 = string | number | boolean
type T2 = Person[keyof Person]



export default {};