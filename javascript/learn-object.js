// object : collection of data that holds key value pairs

let obj = {
  name: "David",
  age: 20,
};

console.log(obj);

// access object properties

console.log(obj.name);
console.log(obj["name"]);

// add new properties

obj.salary = 10000;
console.log(obj);

obj["city"] = "Bangalore";
console.log(obj);

// delete an object propertie

delete obj.city;
console.log(obj);

//Object methods

let obj = {
  name: "David",
  age: 20,
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// nested objects

let obj1 = {
  address: {
    city: "Bangalore",
    state: "Karnatka",
  },
};

// array of objects

let mobile = [
  { name: "Iphone 17", brand: "Apple", country: "USA" },
  { name: "Galaxy", brand: "Samsung", country: "Korean" },
  { name: "Nord series", brand: "One Plus", country: "China" },
  { name: "Iphone 16", branc: "Apple", country: "USA" },
];

let op = [
  { name: "Iphone 17", brand: "Apple", country: "USA" },
  { name: "Iphone 16", branc: "Apple", country: "USA" },
];

let finalop = [];

for (let i = 0; i < mobile.length; i++) {
  if (mobile[i].brand == "Apple") {
    finalop.push(mobile[i]);
  }
}

console.log(finalop);
