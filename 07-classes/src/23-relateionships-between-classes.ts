// 類型的比較 同屬性不同名的屬性
class Person {
    name: string = ''
    age: number = 100
}

class Emplyee {
    name: string = 'felixlu'
    age: number = 23
    salary: number = 10
}

const p: Person = new Emplyee()

class Empty {
    
}

function fn (x: Empty) {}

// 類的屬性如果為空 那所有的物件都能傳入 

fn(window)
fn({})
fn(fn)
fn(100)

export default {}