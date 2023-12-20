class Base {
    static getGreeting() {
        return 'Hello World'
    }
}

class Dervied extends Base {
    myGreeting = Dervied.getGreeting()
}



export default {}