class College {
  constructor(name) {
    this.name = name;
  }

  famousFor() {
    console.log(`${this.name} is famous for placements`);
  }
}

class KIT extends College {
  famousFor() {
    console.log(`${this.name} is famous for `);
  }
}

class AIT extends College {
  famousFor() {
    console.log(`${this.name} is for Sanskriti `);
  }
}

class Product {
  constructor(name) {
    this.name = name;
  }

  buyProduct() {
    console.log("logic to buy a project");
  }
}

class Mobile extends Product {
  buyProduct() {
    console.log(`logic to buy the mobile`);
  }
}

function abc() {}

let abc = function () {};

// arrow function :

const sum = (a, b) => {
  console.log(a + b);
};

sum(5, 10);
