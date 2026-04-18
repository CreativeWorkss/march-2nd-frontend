// using reverse method

function isPalindrome(str) {
  let value = str.split("").reverse().join("");

  return value == str;
}

let op = isPalindrome("dad");
console.log("is palindrome", op);

// palindrome without reverse method

function isPalin(str) {
  let first = 0;
  let last = str.length - 1;
  while (first < last) {
    if (str[first] != str[last]) {
      return false;
    }
    first++;
    last--;
  }
  return true;
}

let final = isPalin("dads");

console.log("is palindrome without reverse", final);
