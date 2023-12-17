interface Animal {
  name: string;
}

interface AnimalConstructor {
  new (s: string): Animal;
  (n: number): number;
}

class AnimalImpl implements Animal {
  name: string;

  constructor(s: string) {
    this.name = s;
  }
}

const AnimalConstructorImpl: AnimalConstructor = AnimalImpl as AnimalConstructor;

const animalInstance = new AnimalConstructorImpl("Lion");
console.log(animalInstance.name); // Output: Lion

const result = AnimalConstructorImpl(42);
console.log(result); // Output: 42


export default {};