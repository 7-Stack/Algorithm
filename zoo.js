// Building a zoo
class Animal {
    constructor(name) {
        // Abstract class
        if (this.constructor === Animal) {
            throw new Error("can't instantiate abstract class");
        }
        // Parent initialization
        this.name = name;
    }
    makeSound() {
        return "sound";
    }
}
class Mammal extends Animal {
    constructor(name) {
        super(name);
        // this.bodySize = "moderate";
    }
    makeSound() {
        return "Eze is a mammal and makes a mammalSound"
    }
    bodySize() {
        return "Moderate"
    }
}
class Bird extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        return "Bird sound: birdSound"
    }
}
class Dog extends Mammal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        return "Dog sound: woof!"
    }
} class Parrot extends Bird {
    constructor(name) {
        super(name);
    }
    makeSound() {
        return "Parrot sound: squawk!"
    }

}

const dog = new Dog();
const parrot = new Parrot();

console.log('Is dog an instance of Dog?', dog instanceof Dog);
console.log('Is dog an instance of Parrot?', dog instanceof Parrot);
console.log(new Mammal('eze').makeSound());
console.log(new Mammal('size of mammal').bodySize());
console.log(new Bird('Bird').makeSound());
console.log(dog.makeSound());
console.log(parrot.makeSound());