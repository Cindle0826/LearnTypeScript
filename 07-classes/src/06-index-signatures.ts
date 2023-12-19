// 索引簽名
class MyClass {
    [s: string]: boolean | ((s: string) => boolean)

    x = true

    check(s: string) {
        return this[s] as boolean;
    }
}

export default {};