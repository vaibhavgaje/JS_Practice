const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); //orderId
// console.log(promise);
///Consumer/
promise.then(function (orderId) {
    console.log(orderId);
//   proceedToPayment(orderId);
})
.catch(function(err){
    console.log(err.message);
})

///Producer

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //Here promise is constructor to create aur own promise, it has function
    // having to functions resolves and reject which are given by javascript to build promises.

    //createOrder
    //validateCart
    //orderId
    if(!validateCart(cart)){
        const err =  new Error("Cart is not valid");
        reject(err);
    }
    //logic for createOrder
    const orderId = "12345";
    if(orderId){
        setTimeout(function(){
            resolve(orderId);
        }, 5000)
        // resolve(orderId);
    }
  });

  return pr;
}

function validateCart(cart){
    return false;
}