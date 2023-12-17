type Point = {x: number, y: number}

function printCoord(pt: Point) {
    console.log(pt);
    
}

printCoord({x: 100, y: 10});

type ID = number | string;

export function printId (id : ID) {
    console.log(id);
}

printId(10)

export const sanitizedInput = (str: string): string => {
    return str.slice(3);
}

console.log(sanitizedInput('abcdef'))