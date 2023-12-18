// keyof 操作符
type Point = {
    x: number
    y: number
}

type P = keyof Point

const p1: P = 'x'
const p2: P = 'y'

type Arrayish = {
    [n: number]: unknown
}

type A = keyof Arrayish

const a:A = 10;

// 當轉換為 JS 時 [100] 同等 ['100'] JS 會自動把數字轉化為字串再去索引物件
type Mapish = {
    [k: string]: boolean
}

const aa:Mapish = {
    20 : false
}

console.log(aa['20'])

type M = keyof Mapish

const m1:M = '100'
const m2:M = 100;

export default {};