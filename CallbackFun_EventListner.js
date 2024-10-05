//what is callback function in javascript

// setTimeout(function(){
//     console.log("timer");
// }, 5000);

// function x(y){
//     console.log("x")
//     y();
// }
// x(function y(){
//     console.log("y") 
// })

//Event listner

// document.getElementById("clickme").addEventListener("click", function xyz(){
// console.log("Button Clicked")
// })

function attachEventListners(){
    let count = 0;
document.getElementById("clickme").addEventListener("click", function xyz(){
    console.log("Button Clicked", ++count);
    });
}   
attachEventListners();

//Garbage Collection & removeEventListeners
