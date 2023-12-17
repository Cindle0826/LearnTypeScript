// 限定了某一個次件必須要有 length 屬性 並且 length 的型別為 number ex: string Array<Type>
interface Lengthwise {
    length: number
}

function loggIdentity<Type extends Lengthwise>(arg: Type): Type {
    arg.length
    return arg;
}

loggIdentity("10");


export default {};