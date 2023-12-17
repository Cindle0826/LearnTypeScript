function printAll (strs: string | string[] | null) {
    if (strs && typeof strs === 'object') {

    } else if (typeof strs === 'string') {
        
    } else {

    }
}

function multiplyAll (values: undefined | number[], factor: number) {
    if (!values) {
        return values
    } else {
        return values.map((x) => {
            return x * factor;
        })
    }
}

console.log(multiplyAll([1, 2, 3], 10));


export default {}