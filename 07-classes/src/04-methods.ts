class Point {
    x: number = 10
    y: number = 10

    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    }
}

export default{};