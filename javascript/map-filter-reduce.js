let mobile = [
  { name: "iphone", brand: "Apple", country: "US" },
  { name: "galaxy", brand: "Samsung", country: "KOREA" },
  { name: "poco", brand: "MI", country: "China" },
  { name: "iphone", brand: "Apple", country: "US" },
];

// filter method

let filteredData = mobile.filter((value) => value.brand != "Apple");

// map method

let mapData = mobile.map((value) => console.log("value data", value));

// reduce method

let scores = [72, 65, 92, 35, 92, 90];

let final = scores.reduce((acc, value) => acc + value, 100);
// second argument holds accumulator initial value
console.log("total score:", final);

mobile = [
  { name: "iphone", brand: "Apple", price: 10000, country: "US" },
  { name: "galaxy", brand: "Samsung", price: 4000, country: "KOREA" },
  { name: "poco", brand: "MI", price: 2000, country: "China" },
  { name: "iphone", brand: "Apple", price: 3000, country: "US" },
];

let totalValue = mobile.reduce((acc, value) => acc + value.price, 0);
console.log("total value", totalValue);

let iphoneValue = mobile.reduce((acc, value) => {
  if (value.brand == "Apple") {
    return acc + value.price;
  }

  return acc;
}, 0);
console.log("total value", totalValue);
console.log("iphone value", iphoneValue);

let transaction = [
  { status: "FAILED", product: "Phone", vaue: 2000 },
  { status: "SUCCESS", product: "Charger", vaue: 200 },
  { status: "FAILED", product: "Smartwatch", vaue: 3000 },
  { status: "FAILED", product: "Shoes", vaue: 5000 },
  { status: "SUCCESS", product: "Phone", vaue: 2000 },
  { status: "SUCCESS", product: "Phone", vaue: 2000 },
];
