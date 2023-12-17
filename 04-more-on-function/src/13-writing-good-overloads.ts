// 在可能的情況下, 總是傾向於使用聯合類型的參數 而不是重載 參數

// function len(s: string): number
// function len(arr: any[]): number
// function len(x: any){
//     return x.length;
// }

function len(s: string | any[]): number {
    return s.length;
}

len('hello');
len([10, 20, 30]);

len(Math.random() < 0.5 ? 'Hello' : [1, 2, 3]);

export default {};