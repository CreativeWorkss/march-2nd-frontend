// Type conversion :

/* two type :
 1) Implicit
 2) Explicit 

*/

console.log("5" + 1);
console.log(5 + 3 + "abcd" + 5 + 1);
console.log("5" - 1);
console.log("5" * 2);
console.log(1 + true);
console.log("1" + true);

if ("hello") {
  console.log("true statement");
} else {
  console.log("false statement");
}

if ("") {
  console.log("true statement");
} else {
  console.log("false statement");
}

// Explicit conversion

// String , Boolean , Number

console.log(String(true));
console.log(String(123));
console.log(Number("123"));
console.log(Boolean(""));
console.log(Boolean("123"));

// JS program to count number of vowels
let data = "Hello Web";
let vow = ["a", "e", "i", "o", "u"];

let newArr = data.split("");
let count = 0;
for (let i = 0; i < newArr.length; i++) {
  if (vow.includes(newArr[i])) {
    count++;
  }
}

console.log("number of vowels", count);

// Remove the duplicates from below array

let arr = [1, 2, 2, 3, 3, 5, 4, 4, 6, 7, 8, 8, 8];
let uniq = [];

for (let i = 0; i < arr.length; i++) {
  if (uniq.indexOf(arr[i]) == -1) {
    uniq.push(arr[i]);
  }
}
console.log("uniq elements", uniq);

// JS program to find largest number in array

const numbers = [10, 5, 8, 1, 7];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max); // 10

// Bangalore  // JS program to find the frequency of each letter
