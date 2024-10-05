//closures

// function x(){
//     var a =7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(z);

// z();

// function z() {
//     var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 3000);
//     console.log("Namaste Javascript");
// }
// x();

// function x(){
//     for(var i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Namaste Javascript");
// }
// x();

// function x(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Namaste Javascript");
// }
// x();

// function x(){
//     for(var i=1; i<=5; i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//             }, x * 1000);
//         }
//         close(i);
//     }
//     console.log("Namaste Javascript");
// }
// x();

// function outer(){
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// // outer()();
// var close = outer();
// close();

// function outer(){

//     function inner(){
//         console.log(a);
//     }
//     // var a = 10;
//     let a = 10;
//     return inner;
// }
// var close = outer();
// close();

// function outer(b){

//     function inner(){
//         console.log(a, b);
//     }
//     // var a = 10;
//     let a = 10;
//     return inner;
// }
// var close = outer("Helloworld");
// close();

// function outest() {
//   var c = 20;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     // var a = 10;
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }
// // var close = outest()("Helloworld");
// var close = (outest())("Helloworld");
// close();

// function outest() {
//     var c = 20;
//     function outer(b) {
//       function inner() {
//         console.log(a, b, c);
//       }
//       // var a = 10;
//       let a = 10;
//       return inner;
//     }
//     return outer;
//   }
//   let a =100;
//   var close = (outest())("Helloworld");
//   close();

/*data hiding/privacy and encapsulation using closure*/
// function counter(){
//     var count = 0;

//    return function incrementCounter(){
//         count++;
//         console.log(count);
//     }
// }
// // console.log(count); //not accessible
// var counter1 = counter()
// counter1();
// counter1();

// var counter2 = counter()
// counter2();
// counter2();

/*closure with constructor function*/
// function Counter(){
//     var count = 0;

//    this.incrementCounter = function (){
//         count++;
//         console.log(count);
//     }    
//    this.decrementCounter = function (){
//     count--;
//     console.log(count);
// }
// }
// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

/*garbage colector and closure relation*/
// function a(){
//     var x =0;
//     return function b(){
//         console.log(x);
//     }
// }
// var y = a();
// y();

function a(){
    var x =0, z=10;  //smartly garbage collect z as fun b is form the closure with only x
    return function b(){
        console.log(x);
    }
}
var y = a();
y();