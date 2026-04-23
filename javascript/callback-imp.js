// swiggy example

// Order the food
// prepare food
// finding Delivary patner
// out for delivary
// food is delivered

function OrderFood(callback) {
  setTimeout(() => {
    console.log("ordering the food");
    callback();
  }, 6000);
}

function PrepareFood(callback) {
  setTimeout(() => {
    console.log("preparing the food");
    callback();
  }, 5000);
}

function FindDeliveryPatner(callback) {
  setTimeout(() => {
    console.log("finding delievary patner");
    callback();
  }, 4000);
}

function OutDelivary(callback) {
  setTimeout(() => {
    console.log("out for delivary");
    callback();
  }, 4500);
}

function FoodDelivered() {
  setTimeout(() => {
    console.log("food is delivered");
  }, 2000);
}

// OrderFood();
// PrepareFood();
// FindDeliveryPatner();
// OutDelivary();
// FoodDelivered();

OrderFood(() => {
  PrepareFood(() => {
    FindDeliveryPatner(() => {
      OutDelivary(() => {
        FoodDelivered();
      });
    });
  });
});
