class Box {
    content: string = ''

    sameAs(other: this) {
        return other.content === this.content
    }
}

class DerivedBox extends Box {
    otherContent: string = '?'
}

const base = new Box()
const derived = new DerivedBox()
// derived.sameAs(base)


export default {}