type ToArray<Type> = Type extends any ? Type[] : never

// type StrArrOrNumArr = string[] | number [] 只能是 string | number 數組
type StrArrOrNumArr = ToArray<string | number>

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never

type StrArrOrNumArr2 = ToArrayNonDist<string | number>

// type StrArrOrNumArr = (string | number)[] 可以包含 string 與 number
let saon: StrArrOrNumArr2 = ["abc", 10, 20]



export default {}