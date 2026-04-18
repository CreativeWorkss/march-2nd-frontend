// slice method

let city = "Bangalore";
console.log(city.slice(3, 6));

// array  basic

let arr = ["Bangalore", "Mangalore", "Dharwad"];
for (let i = 0; i < arr.length; i++) {
  console.log("i have a value", arr[i]);
}

// include method

let str = "Bangalore is my town";
console.log(str.includes("myyyy"));

// indexOf method

let sentance = "Bangalore is my town";
console.log(str.indexOf("myssssss"));

// split & join method

let payment = "Pay on time";
console.log(payment.split("").join(""));

// replace method

let ipl = "We have daily match match match";
console.log(ipl.replaceAll("match", "cricket"));

// trim method

let town = "Bangalore     ";
console.log(town.trim().length);

// 1) JS program count the occurance of letter e
let data = "I am attendingssss an interview";
let arrData = data.split("");
let sentLength = data.split("").length;
let count = 0;
for (let i = 0; i < sentLength; i++) {
  if (arrData[i] == "e") {
    count++;
  }
}

console.log("letter E occurance", count);

// 2)  JS program to find the largest word in input

let newData = data.split(" ");
console.log(newData);
let word = "";
for (let i = 0; i < newData.length; i++) {
  if (newData[i].length > word.length) {
    word = newData[i];
  }
}
console.log(word);
