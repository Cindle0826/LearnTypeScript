function comibine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2)
}

console.log(comibine<string | number>(["String"], [1, 2, 3]));
