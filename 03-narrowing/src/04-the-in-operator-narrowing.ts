type Fish = { swim: () => void};
type Brid = { fly: () => void}
type Human = {swim?: ()=> void; fly?: () => void}
function move(animal: Fish | Brid | Human) {
    if ("swim" in animal) {
        return (animal as Fish).swim();
    }

    return (animal as Brid).fly();
}

export default {}
