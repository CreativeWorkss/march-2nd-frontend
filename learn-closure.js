function outer() {
  let value = 0;

  function inner() {
    value++;
    console.log("my value is", value);
  }

  return inner;
}

let out = outer();

out();
out();
out();
