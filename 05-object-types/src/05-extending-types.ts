interface BasicAddress {
    name?: string
    street: string
    city: string
    country: string
    postalCode: string
}

interface AddressWithUnit extends BasicAddress {
    unit: string
}

// 相對於 Java 可以多擴展 接口

interface ColorFul {
    color: string
}

interface Circle {
    radius : number
}

interface ColorCircle extends ColorFul, Circle {
    
}


export default {};