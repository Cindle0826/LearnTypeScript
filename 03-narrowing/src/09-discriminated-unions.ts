// interface Shape {
//     kind : 'circle' | 'square'
//     redius?: number
//     sideLength?: number
// }

interface Circle {
    kind: 'circle'
    radius: number
}

interface Square {
    kind: 'square'
    sideLength: number
}

type Shape = Circle | Square

function getArea(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius **2
    } else {
       return shape.sideLength **2
    }
}

console.log(Math.floor(getArea({kind : 'circle', radius : 10})));

export default {};

