class Car {
    #name;
    #position;

    constructor(name) {
        this.#name = name;
        this.#position = 0;
    }

    move(value) {
        if (value >= 4) {
            this.#position++;
        }
    }

    getName() {
        return this.#name;
    }

    getPosition() {
        return this.#position;
    }
}