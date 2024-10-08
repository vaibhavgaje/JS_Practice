//Promises is the new way of handling asynchronous operations in JavaScript.
/*
1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
  2.2) A promise has 3 states: pending | fulfilled | rejected.
  2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
  2.4) A promise resolves only once and it is immutable. 
  2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()
*/
/*
const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function(){
    proceedToPayment(orderId);   //here passing callback function to createorder api ad blindly trusting on api , its inversion of control
});                    //this is callback function and problem occures is inversion of control to handle this we use promisses

////////////////////////////////////////////////////////////

const promise = createOrder(cart);  //here promise is an object and when createorder() initialize it has value as undefined like {dtaa: undefined}
                                    // and after execuation complete of createorder after some time the promise object update like {data: orderDetails}

promise.then(function(){            //here we attaching callabcak function to promise object here we have control of callback function program
    proceedToPayment(orderId);
});
*/

// const GITHUB_API = "https://api.github.com/users/akshaymarch7"
// // const GITHUB_API = "//https://api.github.com/users/vaibhavgaje"

// const user = fetch(GITHUB_API); //here user is promise object, and fetch return us a promise
// console.log(user);

// user.then(function(data){
//     console.log(data);
// })

//***********Promis Chaining**************//

const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function (orderID) {
  //this is callback hell
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummery(paymentInfo, function () {
      updateWallateBalance();
    });
  });
});

//following is the promise chaining
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummery(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWallateBalance(paymentInfo);
  });

//or we can write promise chain also like below using arrow function

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummery(paymentInfo))
  .then((paymentInfo) => updateWallateBalance(paymentInfo));

  
