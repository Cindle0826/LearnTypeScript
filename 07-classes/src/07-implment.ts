interface Pingable {
    ping(): void
}

class Sonar implements Pingable {
    ping(): void {
        console.log('ping');
    }
}

export default {}