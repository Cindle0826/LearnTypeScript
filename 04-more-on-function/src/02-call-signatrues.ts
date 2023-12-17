type DescribleFunction = {
    description: string
    (someArg: number): boolean
    (args: string[]): void
}

function doSomething(fn: DescribleFunction) {
    console.log(fn.description + ' returnted ' + fn(6));
    fn(["1213"]);
}

function fn1(n: number): boolean;
function fn1(args: string[]): void;
function fn1(n: number | string[]): boolean | void {
    if (typeof n === 'number') {
        console.log(n);
        return true;
    } else {
        console.log(n);
    }
}

fn1.description = 'Hello'

doSomething(fn1);

export default {};


