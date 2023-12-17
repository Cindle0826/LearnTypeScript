// 函數的多載

function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    return new Date(mOrTimestamp)
}

makeDate(5, 6, 7)
makeDate(10);

export default {};

