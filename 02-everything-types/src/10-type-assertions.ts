// const myCanvas = document.querySelector('main_canvas') as HTMLCanvasElement

// const myCanvas2 = <HTMLCanvasElement> document.querySelector('main_canvas')

const x = ('hello' as unknown) as number

console.log(x);

const y: any = "Hello ";
const len: number = (<string> y).length;
