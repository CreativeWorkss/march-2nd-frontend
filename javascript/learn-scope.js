// Learning concept : Lexical scoping

// global scope
// local scope
// nested scope
// block scope

let ad = "Five star Ad"; // global scope

function ramesh() {
  let one = "Ramesh is on the set"; // local scope

  function suresh() {
    let two = "Suresh is on the set"; // nested scope

    console.log(ad);
    console.log(one);
    console.log(two);

    if (true) {
      let final = "Ad is done"; // block scope
      console.log(final);
    }
  }

  // console.log(two); two is not accessable

  suresh();
}

// console.log(one); // one is not accessablie

ramesh();
