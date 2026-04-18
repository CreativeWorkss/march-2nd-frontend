// this key is used to refer the object related data

let obj = {
  name: "David",
  sayhello: function () {
    console.log(`say hello to ${this.name}`);
  },
};

obj.sayhello();

//Frequency of char in string

let str = "Bangalore";

function findFreq(value) {
  let op = {};
  let char = value.split("");

  for (let i = 0; i < char.length; i++) {
    let alpha = char[i];
    op[alpha] = (op[alpha] || 0) + 1;
  }
  return op;
}

let final = findFreq(str);
console.log(final);
