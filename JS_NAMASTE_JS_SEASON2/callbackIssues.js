// console.log("Namaste");

// setTimeout(function(){
//     console.log("Javascript");
// },5000)

/*

//callbacks are way to handling async operation in JS, asynchronous programming in js exist because callback exist...
 
Two issues while using callbacks

1 - Callback hell
When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 

2 - Inversion of control
The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
That process is called inversion of control. 
*/
//1 - Callback hell
const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummery(function () {
      api.updateWallet();
    });
  });
});

//2 - Inversion of control


