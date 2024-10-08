//promises used to handle async operation in JS
const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function(){
    proceedToPayment(orderId);   //here passing callback function to createorder api ad blindly trusting on api , its inversion of control
});                    //this is callback function and problem occures is inversion of control to handle this we use promisses

////////////////////////////////////////////////////////////

const promise = createOrder(cart);  //here promise is an object and when createorder() initialize it has value as undefined like {dtaa: undefined}
                                    // and after execuation complete of createorder after some time the promise object update like {data: orderDetails}

promise.then(function(){            //here we attaching callabcak function to promise object
    proceedToPayment(orderId);
});
