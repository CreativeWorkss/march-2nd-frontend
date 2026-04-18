function Achieve() {
  console.log("i need to achieve like Elon Musk");
}

Achieve();

// sum of two number // Function with arguments

function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(10, 20);

// Function with return statement

function sumTwo(num1, num2) {
  return num1 + num2;
}

let sumOfTwoNumber = sumTwo(30, 40);

console.log("i have a sum", sumOfTwoNumber);

// Function Expression

let goal = function () {
  console.log("i have a goal");
};

goal();

let multiply = function (num1, num2) {
  console.log(num1 * num2);
};

multiply(5, 10);

let multi = function (num1, num2) {
  return num1 * num2;
};

let final = multi(10, 5);
console.log("value of mutiply", final);
