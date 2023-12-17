// 可以使用接口擴展 

interface Sister {
    name: string
}

interface Sister {
    age: number
}

const sister1: Sister = {
    name : "Hello",
    age: 10
}

// 不能使用類別去 擴展
type Brother = {
    name: string
}

// type Brother = {

// }



export default {};

