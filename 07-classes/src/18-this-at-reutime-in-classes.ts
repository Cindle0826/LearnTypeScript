class MyClass {
    name = 'MyClass'
    getName(this: MyClass) {
        return this.name
    }
}

const c = new MyClass()

const obj = {
    name: 'obj',
    getName: c.getName
}
console.log(obj.getName());

export default {}