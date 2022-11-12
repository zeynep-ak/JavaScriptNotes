class Vegetable {
    constructor(name) {
      this.name = name;
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);

// getter setter
class Book {

    constructor(author) {
      this._author = author;
    }

    // getter
    get writer() {
      return this._author;
    }

    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
}

const novel = new Book('anonymous');
console.log(novel.writer);

novel.writer = 'newAuthor';
console.log(novel.writer);

// CELSIUS FAHRENHEIT
class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }

    get temperature() {
      return 5/9 * (this._fahrenheit - 32);
    }

    set temperature(updatedCelsius) {
      this._fahrenheit = updatedCelsius * 9.0 / 5 + 32;
    }
}
  
const thermos = new Thermostat(76);
let temp = thermos.temperature;

thermos.temperature = 26;
temp = thermos.temperature;
