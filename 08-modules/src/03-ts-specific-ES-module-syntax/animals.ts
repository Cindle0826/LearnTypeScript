export type Cat = {
    breed: string
    yearOfBirg: number
}

export interface Dog {
    breeds: string[]
    yearOfBirth: number
}

export const createCatName = () => 'fluffy'