// 屬性修改器

type Shape = {}

interface PaintOptions {
    shape: Shape,
    xPos?: number,
    yPos?: number
}

// function paintShape(opts: PaintOptions) {
//     console.log(opts.shape, opts.xPos, opts.yPos);
// }

function paintShape ({shape, xPos = 0, yPos = 0}: PaintOptions) {
    console.log(xPos);
}

const shape: Shape = {}
paintShape( {shape })
paintShape( {shape, xPos : 10, yPos : 20});

export default {};