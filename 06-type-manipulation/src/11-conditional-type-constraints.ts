type MessageOf<T> = T extends { message: unknown} ? T['message'] : never

interface Email {
    message: string
}

interface Dog {
    brak(): void
}

type EmailMessageContents = MessageOf<Email>
const emc: EmailMessageContents = 'asdasdasd...'


type DogMessageContents = MessageOf<Dog>
const dmc: DogMessageContents = 'error' as never

type Flatten<T> = T extends any[] ? T[number] : T

type Str = Flatten<boolean[]>

type Num = Flatten<number>



export default {};