// function fn(x: string): void
// function fn() {

// }

// fn('10');

// function fn(b: boolean): void
// function fn(s: string): void
// // 如果實現了 只有兩種狀況 1. 實現所有帶參數的值  2. 實現空參數的值
// function fn(s: string | boolean) {
    
// }

function fn(b: boolean): string
function fn(s: string): void
function fn(s: string | boolean): string | void {
    return "Hello"
}



export default {};