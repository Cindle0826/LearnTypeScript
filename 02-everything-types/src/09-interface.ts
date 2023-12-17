export interface Point {
    x: number,
    y: number
}

function printCoord (pt: Point) {
    console.log(pt);
    
}

printCoord ({x: 100, y: 200});

// 擴展接口
// interface Animal {
//     name: string
// }

// interface Bear extends Animal {
//     honey: boolean
// }

// const bear: Bear = {
//     name: 'while',
//     honey: true
// }


// type 擴展

// type Animal = {
//     name: string
// }

// type Bear = Animal & {
//     honey: boolean
// }

// const bear: Bear = {
//     name : "white",
//     honey : false
// }

// console.log(bear.name);
// console.log(bear.honey);

// 將現有的類型添加字段
// interface MyWindow {
//     count: number
// }

// interface MyWindow {
//     title: string
// }

// 將現有的type添加字段
type MyWindow = {
    count: number,
    title: string
}





const w: MyWindow = {
    count: 10,
    title: 'hello ts'
}