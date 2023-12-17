function printId (id?: number | string | {}) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
        
    }
    
}

printId(1)
printId('abc')
printId({a : 10, b : 20})

const welcomePeople = (x: string[] | string) => {
    if (Array.isArray(x)) {
        console.log(`Helo ${x.join(",")}`);
    } else {
        console.log('welcome lone travler ' + x);
        
    }
}


welcomePeople(["10"]);

const getFirstThree  = (x:string | number[]) => {
    return x.slice(0,3);
}

console.log(getFirstThree ("abcde"));
console.log(getFirstThree ([1, 2, 3, 4, 5]));


