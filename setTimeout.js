//trust issue with setTimeout, as if program wait greater than time of settime then setTime out function also delay like below example
console.log("Strat");

// setTimeout(function cb(){
//     console.log("Callback");
// },5000);
setTimeout(function cb(){
    console.log("Callback");
},0);

console.log("End");

let startDate =  new Date().getTime();
let endDate = startDate;

//here can millio of lines also delay the setTimeout

while(endDate < startDate+10000){
    endDate = new Date().getTime();
}
console.log("While expires");