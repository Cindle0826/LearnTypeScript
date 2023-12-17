interface SomeType {
    readonly prop: string
}

function doSomething(obj: SomeType) {
    console.log(obj.prop);
    // obj.prop = 'hello'
}

interface Home {
    readonly resident : {
        name: string
        age: number
    }
}

function visitForBirthday(home: Home){
    console.log(home.resident.name);
}

interface Person {
    name: string
    age: number
}

interface ReadOnlyPerson {
    readonly name: string
    readonly age: number
}

let writablePerson: Person = {
    name : 'Felix',
    age : 18
}

let readOnlyPerson: ReadOnlyPerson = writablePerson;
console.log(readOnlyPerson.age);
writablePerson.age++
console.log(readOnlyPerson.age);

export default {};
