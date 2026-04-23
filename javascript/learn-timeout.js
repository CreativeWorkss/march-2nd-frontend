//setTimeout  & setInterval

setTimeout(() => {
  console.log("Set Timeout call ");
}, 3000);

setInterval(() => {
  console.log("Set Interval call ");
}, 3000);

function one() {
  setTimeout(() => {
    console.log("function one");
  }, 3000);
}

function two() {
  setTimeout(() => {
    console.log("function two");
  }, 1000);
}

one();
two();

// JS program to find out given number is Prime Number or Not
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));

let arr = [
  { phone: "iphone", price: 100 },
  { phone: "iphone", price: 300 },
  { phone: "samsung", price: 20 },
];
let value = arr.reduce((acc, val) => {
  if (val.phone == "iphone") {
    return acc + val.price;
  }
  return acc;
}, 0);
console.log("reduce value", value);
