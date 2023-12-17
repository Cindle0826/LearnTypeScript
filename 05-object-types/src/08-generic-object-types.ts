interface Box<T> {
    contents: T
}

interface Apple {

}

let boxA: Box<string> = {
    contents : "ABC"
}

let apple : Apple = {};

type AppleBox = Box<Apple>

let ab: AppleBox = {
    contents : apple
}


type Hand<Type> = {
    [s: symbol] : Type
}

const sym = Symbol("10");

let a: Hand<string> = {
    [sym] : "bbb"
}

type OrNull<Type> = Type | null
type OneOrMany<Type> = Type | Type[]
type OneOrManyOrull<Type> = OrNull<OneOrMany<Type>>
type OneOrManyOrNUllString = OneOrManyOrull<string>



export default {};



