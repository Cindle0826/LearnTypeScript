interface ColorFul {
    color: string
}

interface Circle {
    radius: number
}

type ColorFulcircle = ColorFul & Circle;

const cc: ColorFulcircle = {
    color: 'red',
    radius: 100
}

export default {};

