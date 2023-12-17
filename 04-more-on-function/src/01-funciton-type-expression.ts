function greeter(fn: (a: string) => void) {
    console.log(fn('Hello World'));
}

function printToConsole(s: string): string {
    return s;
}

greeter(printToConsole)

export default {};