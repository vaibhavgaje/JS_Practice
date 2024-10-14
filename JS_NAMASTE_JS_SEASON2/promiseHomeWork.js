const cart = [
  {
    itemNmae: "Shoes",
    itemPrice: 2000,
  },
  {
    itemNmae: "Pants",
    itemPrice: 1000,
  },
  {
    itemNmae: "Kurta",
    itemPrice: 900,
  },
];

let walletBalance = 10000;
//createOrder
//proceedToPayment
//showOrderSummery
//updateWallate

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (orderStatus) {
    return showOrderSummery(orderStatus);
  })
  .then(function(orderHistory){
    return updateWallate(orderHistory);
  })
  .then(function(res){
    console.log(res);
  })
  .catch(function(err){
    console.log(err.message);
  });

// createOrder(cart)
//     .then(orderId => orderId)
//     .then(orderId => proceedToPayment(orderId))
//     .then(orderStatus => showOrderSummery(orderStatus))
//     .then(orderHistory => updateWallet(orderHistory))
//     .then(res => console.log(res))
//     .catch(err => console.log(err.message))

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      reject(new Error("Cart is not valid"));
    }
    let orderId = 2468;
    if (orderId) {
      resolve(orderId);
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (orderId) {
      resolve({ paymentStatus: 1, message: "Payment successfully completed" });
    } else {
      reject(new Error("Payment Failed"));
    }
  });
}

function showOrderSummery(orderStatus) {
  return new Promise(function (resolve, reject) {
    if (orderStatus.paymentStatus === 1) {
      resolve({ status: "success", orders: cart });
    } else {
      reject(new Error("Something went wrong"));
    }
  });
}

function updateWallate(orderHistory){
    return new Promise(function(resolve, reject){
        if(orderHistory.status === "success"){
            let orderAmount = 2000;
            walletBalance = walletBalance - orderAmount;
            resolve({balance: walletBalance, message:"wallate updated"})
        }else{
            reject(new Error("Wallate balance not updated"))
        }
    })
}

function validateCart(cart){
    return true;
}