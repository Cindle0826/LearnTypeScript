let x: undefined = undefined
let y: null = null;

function doSomething(x: string | null) {
    if (x === null) {
        console.log('gg');
    } else {
        console.log('Hello, ' + x.toUpperCase());
    }
}

function liveDangrously(x?: number | null) {
    console.log(x!.toFixed());
}

liveDangrously(123);


export {}