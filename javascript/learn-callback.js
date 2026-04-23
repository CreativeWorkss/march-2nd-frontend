// callback ?
// passing function as an argument to another function to make sure another functions executes first and next the following function
// callback is a way to handle asynchronous programing

// use of callback : to handle asynchronous programming in a synchronous way

function one(mnc) {
  setTimeout(() => {
    console.log("function one");
    mnc();
  }, 3000);
}

function two() {
  setTimeout(() => {
    console.log("function two");
  }, 1000);
}

one(() => {
  two();
});
