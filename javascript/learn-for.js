// for .. in loop // this loop is used specifically for objects

let obj = {
  name: "David",
  age: 20,
  salary: 10000,
};

for (let key in obj) {
  console.log(`key : ${key} , Value : ${obj[key]}`);
}

// for of loop  // this is used for arrays

let score = [65, 75, 80, 82, 90];

for (let num of score) {
  if (num >= 75) {
    console.log("its a distinction", num);
  }
  d;
}
