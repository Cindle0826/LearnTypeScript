// 複寫 overried

class Base {
    greet() {
        console.log('Hello Yun!');
        
    }
}

class Derived extends Base {
    // 在 TS 中 繼承父類, 子類一定要兼容父類,如果不寫「?」則代表必須傳入 name 會導致不兼容
    greet(name?: string) {
        if(name === undefined) {
            super.greet();
        } else {
            console.log(name.toUpperCase());
        }
    }
}

export default {}