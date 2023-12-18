// 不使用 class 關鍵字 實現 同名構造函數 與 同名一般函數
type MyClass = new (s: string) => void

function MyClass(this: {property : string}, initValue: string){
    this.property = initValue
}

interface MyConstructor {
    new (s: string): void
    (n: number): number
}

function MyConstructor(this: {s: string}, initValue: string | number, ): MyClass | number {
    if (typeof initValue === 'string' ) {
        this.s = initValue;
        return new (MyClass as any)(initValue);
    } else {
        return initValue;
    }
}

const instance = new (MyConstructor as any)("success!");
console.log(instance.property); 

const result = (MyConstructor as any)(42);
console.log(result);

export default {};