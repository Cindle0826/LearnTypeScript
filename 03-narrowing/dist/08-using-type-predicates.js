"use strict";
//  如果回傳值 是 true 的話代表 pet 是 Fish 反之為 Bird
function isFish(pet) {
    return pet.fly === undefined;
}
function getSmallPet() {
    let fish = {
        name: 'sharkey',
        swim: () => { }
    };
    let bird = {
        name: 'sparrow',
        fly: () => { }
    };
    return false ? bird : fish;
}
let pet = getSmallPet();
// isFish 方法回傳 true 或 false 但與直接比對 pet === Fish 的差異而言
// 可以告訴 TypeScript 此物如果成立就是 Fish
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
const zoo = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1 = zoo.filter(isFish);
const underWater2 = zoo.filter(isFish);
const underWater3 = zoo.filter((pet) => {
    return pet.name === 'frog' ? false : isFish(pet);
});
console.log('underWater1', underWater1);
console.log('underWater2', underWater2);
console.log('underWater3', underWater3);
