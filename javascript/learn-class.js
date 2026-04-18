class Demo {} // class : blueprint of an object

let demo = new Demo(); // instance of a class
console.log(demo); // {}  , object

class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
}

let bmw = new Car("BMW", "M5");
let audi = new Car("Audi", "audi");
console.log(bmw);
console.log(audi);
