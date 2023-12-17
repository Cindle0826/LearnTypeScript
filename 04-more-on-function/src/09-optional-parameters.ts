function f1(n?: number){
    console.log(n!.toFixed());
    console.log(n!.toFixed(3));
}

function f2(n: number = 100){
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}

export default {};