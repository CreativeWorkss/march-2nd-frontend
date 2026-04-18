// difference between var , let , const

var name = "David";
var name = "Johnson";
console.log("my name is ", name);

let city = "Bangalore";
city = "Hubli";
console.log("i reside in", city);

const state = "Karnataka";
state = "Maharastra";
console.log("state is ", state);

// scope of variable

{
  const score = 79;
  console.log("Rohit sharma scored", score);
}

console.log("Rohit sharma scored ----", score);
