// Why Promise ?
// to avoid callback hell , in asynchronous programming
//  new conceptt was introduced which is called a Promise

// what is Promise ? : Promise is a JS object that will resolve
// or reject the operation or some code execution

let getChocolate = new Promise((resolve, reject) => {
  let isResponse = true;
  setTimeout(() => {
    if (isResponse) {
      resolve("getting the chocolate");
    } else {
      reject("failed with a promise");
    }
  }, 3000);
});

getChocolate
  .then((message) => {
    console.log("result", message);
  })
  .catch((error) => {
    console.log(error);
  });
