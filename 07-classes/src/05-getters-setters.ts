// 如果有設置 get set 方法 再賦予物件值的時候 TS 會自動調用
class C {
    _length = 0

    get length() {
        return this._length
    }

    set length(value){
        this._length = value
    }
}

let c:C = new C()
// console.log(c.length);
c.length = 100
// console.log(c.length);

class Thing {
    _size = 0

    get size(): number {
        return this._size
    }

    set size(value: string | number | boolean) {
        let num = Number(value)

        // isFinite 表示可數的 如果是數字就回傳 true 不是就 false
        if(Number.isFinite(num)) {
            this._size = num
        }
    }
}

let t: Thing = new Thing()
console.log(t.size);
t.size = 100
console.log(t.size);
t.size = 'hello'
console.log(t.size);





export default {};