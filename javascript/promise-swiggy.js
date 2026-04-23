// swiggy example

// Order the food
// prepare food
// finding Delivary patner
// out for delivary
// food is delivered

function OrderFood() {
  return new Promise((resolve, reject) => {
    let response = true;

    setTimeout(() => {
      if (response) {
        resolve("food order has been done");
      } else {
        reject("food is not available at the moment");
      }
    }, 6000);
  });
}

function PrepareFood() {
  return new Promise((resolve, reject) => {
    let response = true;
    setTimeout(() => {
      if (response) {
        resolve("preparing the food");
      } else {
        reject("chef is not availbale at the moment");
      }
    }, 5000);
  });
}

function FindDelivaryPatner() {
  return new Promise((resolve, reject) => {
    let response = true;
    setTimeout(() => {
      if (response) {
        resolve("found a delivary patner");
      } else {
        reject("all patners are busy at the moment");
      }
    }, 3500);
  });
}

function OutForDelivary() {
  return new Promise((resolve, reject) => {
    let response = true;
    setTimeout(() => {
      if (response) {
        resolve("food is out for delivary");
      } else {
        reject("taking longer than expected");
      }
    }, 4000);
  });
}

function FoodDelivered() {
  return new Promise((resolve, reject) => {
    let response = true;
    setTimeout(() => {
      if (response) {
        resolve("food is delivered successfully");
      } else {
        reject("address provided is wrong");
      }
    }, 1500);
  });
}

OrderFood()
  .then((message) => {
    console.log("message one", message);
    return PrepareFood();
  })
  .then((message) => {
    console.log("message two", message);
    return FindDelivaryPatner();
  })
  .then((message) => {
    console.log("message three", message);
    return OutForDelivary();
  })
  .then((message) => {
    console.log("message four", message);
    return FoodDelivered();
  })
  .then((message) => {
    console.log("message five", message);
  })
  .catch((error) => {
    console.log("error", error);
  });
