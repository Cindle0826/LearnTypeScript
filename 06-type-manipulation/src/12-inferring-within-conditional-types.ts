// 判斷 Type 是否是函數 如果是函數就返回函數的回傳值 如果不是函數則返回 never
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never

// type Num = number
type Num = GetReturnType<() => number>
let num: Num = 100

// tpye Str = string
type Str = GetReturnType<(x: string) => string>
let str: Str = 'ABC'

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>
let bools: Bools = [true, false]

// type Never = nuver
type Never = GetReturnType<string>

type T1 = ReturnType<(x: string | number)=> string | number>;
const t1: T1 = 'aaa'


export default {};