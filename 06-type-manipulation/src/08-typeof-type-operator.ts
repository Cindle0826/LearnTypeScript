let s = 'Hello World'
let n: typeof s = 'yun'

type Predcate = (x: unknown) => boolean
// ReturnType 接收一個泛型 此泛型必須是一個函數, 並且回傳此泛型函數的回傳值
type K = ReturnType<Predcate>;

function f() {
    return {
        x: 10,
        y: 3
    }
}

// 不能直接傳入 f 當泛型, 因為此時 f 他認為是值, 必須轉換為類型後才能傳入 
type P = ReturnType<typeof f>;

const p:P = {x: 100, y: 200};

// typeof 不能去調用一個函數再調用時候的返回類型

function msgBox (){};
// let shouldContinue: typeof msgBox('100') // 不能調用
// let shouldContinue: typeof msgBox() // 不能傳入值
let shouldContinue: typeof msgBox
shouldContinue = function () {};

// 透過 typeof 關鍵字獲取數組中的 value

const arr = [
    { name: 'Alice', age : 15},
    { name: 'Bob', age : 20},
    { name: 'Eve', age : 24}
]

// 此時的 number 代表陣列索引值
type Person = typeof arr[number];

const p1: Person = {
    name : 'aaaa',
    age : 10
}

type Age = typeof arr[number]['age'];
const age: Age = 10;

type Age2 = Person['age'];
const age2: Age2 = 24;


const key = 'age';
type Age3 = Person[typeof key];

type Key = 'age'
type Age4 = Person[Key];



export default {};