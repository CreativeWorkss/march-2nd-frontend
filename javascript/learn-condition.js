// IF condition example
let score = 120;

if (score > 100) {
  console.log("i have a century in the stats");
}

// if - else

let age = 12;

if (age > 18) {
  console.log("Eligible to get DL");
} else {
  console.log("wait for few more years");
}

// if-else-if example

let team = "RCB";

if (team == "RCB") {
  console.log("Ee sala cup namde");
} else if (team == "CSK") {
  console.log("Thala -- Whistle poodu");
} else if (team == "MI") {
  console.log("Mumbai ");
} else {
  console.log("I am Vijay Malya");
}

// switch condition

let orderStatus = "DISPATCHED";

switch (orderStatus) {
  case "ORDERED":
    console.log("i have ordered the item");
    break;
  case "DISPATCHED":
    console.log("item is dispatched and in Transit");
    break;
  case "OUT OF DELIVARY":
    console.log("item is out for delivary");
    break;
  default:
    console.log("product not servicable");
}

// switch example two

let amount = 6000;

switch (true) {
  case amount > 5000:
    console.log("VIP / Premium customer");
    break;
  case amount > 2000:
    console.log("give 20% discuount");
    break;
  default:
    console.log("shop more to get discount");
}
