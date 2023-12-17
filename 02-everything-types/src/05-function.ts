function greet (name: string) {
    console.log(`Hello , ${name.toUpperCase()} !!`);
    
}

greet('42');

function getNumber (): number {
    return 123
};

const names: string[] = ['Yun', '123'];

names.forEach(e => console.log(e));
