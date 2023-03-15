class Animal {
    constructor(move, typeOfAnimal) {
        this.move = move;
        this.typeOfAnimal = typeOfAnimal;
} toConsole() {
    console.log(`${this.typeOfAnimal} can ${this.move}`);
}
}

class newAnimal extends Animal {
    constructor(move, typeOfAnimal) {
        super(move, typeOfAnimal);
    } toConsole2() {
        console.log(`${this.typeOfAnimal} is doing some ${this.move}!`);
}
}

const Cat = new newAnimal ('move', 'cat');
Cat.toConsole();
Cat.toConsole2();

