// 當設計一個回掉函數時, 回掉函數的 傳入值永遠不要設計為可選， 除非可選的儲入值有設定預設值

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for(let i = 0; i < arr.length ; i++) {
        // callback(arr[i]);
    }
}

myForEach([1, 2, 3], (a, i) => {
    // console.log(i.toFixed());
})

const arr = [10, 20, 30]

export default {};