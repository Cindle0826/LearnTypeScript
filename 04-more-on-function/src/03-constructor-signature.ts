class Ctor {
    s: string
    constructor(s: string) {
        this.s = s;
    }
}

type SomeConstructor = {
    new (s: string): Ctor
}

function fn(ctor: SomeConstructor) {
    return new ctor('Hello');
}

const f = fn(Ctor)
console.log(f.s);


// 實作的此方法以當作 構造函數使用 也可以當作一般函數使用
interface CallOrConstructor {
    new (s: string): Date
    (n?: number): string
}

function fn1(date: CallOrConstructor) {
    let d = new date('2021-12-20')
}

fn1(Date);

export default {};
