function printAll(strs: string | string[] | null) {
    if (typeof strs === 'object' && strs !== null) {
        for(const str of strs) {
            console.log(str);
        }
    } else if (typeof strs === 'string') {
        console.log(strs);
    } else {
        console.log(strs);
    }
}

export default {}