class Action {
  #balance = 0; // for private fields start with #

  constructor(name) {
    this.name = name;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount; // this.#balance = this.#balance+amount;
      this.#viewBalance();
    } else {
      console.log("cannot add negative money");
    }
  }

  withdraw(amount) {
    if (amount < this.#balance) {
      this.#balance -= amount;
      this.#viewBalance();
    } else {
      console.log("insufficient funds");
    }
  }

  #viewBalance() {
    console.log(`Account balance : ${this.#balance}`);
  }
}

let bank = new Action("Axis");
bank.deposit(10000);
bank.withdraw(3000);
bank.#viewBalance();
