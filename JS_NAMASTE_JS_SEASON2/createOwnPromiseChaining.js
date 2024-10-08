const cart = ["shoes", "pants", "kurta"];

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {   //Here we are attaching failure callback function using a catch to our promise object
    console.log(err.message); //this catch handles al the error of top of it in chain
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    console.log("No mater what happnes, I will definietely be called.");
  });

///Producer

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //Here promise is constructor to create aur own promise, it has function
    // having two arguments/parameters, resolves and reject which are given by javascript to build promises.

    //createOrder
    //validateCart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    //logic for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
      // resolve(orderId);
    }
  });

  return pr;
}

function validateCart(cart) {
  return false;
}

function proceedToPayment(orderId) {
  ////
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}
