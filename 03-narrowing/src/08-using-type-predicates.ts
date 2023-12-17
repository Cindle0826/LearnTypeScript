type Fish = {
    name: string
    swim: () => void
}

type Bird = {
    name: string
    fly: () => void
}

//  如果回傳值 是 true 的話代表 pet 是 Fish 反之為 Bird
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Bird).fly === undefined;
}

function getSmallPet (): Fish | Bird {
    let fish: Fish = {
        name: 'sharkey',
        swim: () => {}
    }

    let bird: Bird = {
        name: 'sparrow',
        fly: () => {}
    }
    return false ? bird : fish;
}

let pet:Fish | Bird = getSmallPet()

// isFish 方法回傳 true 或 false 但與直接比對 pet === Fish 的差異而言
// 可以告訴 TypeScript 此物如果成立就是 Fish
if(isFish(pet)) {
    pet.swim();
} else {
    pet.fly()
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()]
const underWater1: Fish[] = zoo.filter(isFish);
const underWater2: Fish[] = zoo.filter(isFish) as Fish[]

const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  return pet.name === 'frog' ? false : isFish(pet);
})

console.log('underWater1', underWater1);
console.log('underWater2', underWater2);
console.log('underWater3', underWater3);
