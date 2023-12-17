"use strict";
function printCoord(pt) {
    console.log('座標的x值為: ' + pt.x);
    console.log('座標的x值為: ' + pt.y);
}
printCoord({ x: 10, y: 20 });
function printName(obj) {
    console.log(obj.first + ' ----- ' + obj.last?.toLowerCase());
}
printName({ first: 'Yun', last: 'fff' });
