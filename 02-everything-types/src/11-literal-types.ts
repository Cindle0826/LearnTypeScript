let testStr = 'Hello World';
testStr = 'yun'

const constStr = 'Hello World'

export let x: '123' = '123';

function printText (s: string, alignment: 'Left' | 'Right' | 'Center') {
    console.log(s + " --- " + alignment);
}

printText('Hello', 'Left');
printText('Hello', 'Right');

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

interface Options {
    width : number
}

function configure (x: Options | 'auto') {
    console.log(x);
}

configure({width : 10})

function handleRequest(url: string, method: 'GET' | 'POST' | 'GUESS'): void {
    console.log(url + ' --- ' + method);
    
};

const req = {
    url : 'http://example.com',
    method : 'GET'
} as const

handleRequest(req.url, req.method)


function aaa (x: number) {
    
}

type aa = number;
const a: aa = 10;

aaa(a)

export default {};

