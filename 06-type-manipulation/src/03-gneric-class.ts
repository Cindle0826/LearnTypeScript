class GenericNumber<NumType> {
    zeroValue: NumType = (0 as NumType);
    add: (x: NumType, y: NumType) => NumType = (x: NumType, y: NumType) => x;
}

let myGeneric = new GenericNumber<number>()
myGeneric.zeroValue = 0;
myGeneric.add = function (x, y) {
    return x + y;
}


export default {};