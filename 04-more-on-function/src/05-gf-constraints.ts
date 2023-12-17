function longest<Type extends {length: number}>(a: Type, b: Type) {
    if (a.length > b.length) {
        return a;
    } else {
        return b;
    }
}

const longerArray = longest([1, 2, 3], [10]);
const lognerString = longest('felix', 'lu')
const notOk = longest([10], [2])
