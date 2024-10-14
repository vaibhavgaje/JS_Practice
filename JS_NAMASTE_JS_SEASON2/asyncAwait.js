/**
 what is async?
 what is await?
 How async await works behind the scenes?
 Examples of using async/await
 Error handling
 Interviews
 Async await vs Promise.then/.catch>

*/
/////////////////////
/*
const p = new Promise((resolve, reject)=>{
  resolve("Promise Resolved Value..!");
});

//async function always return a promise
async function getData() {
  // return "Namaste";  //this function automatically wrapped value in promise and return it, if you dont written any promise here
  return p;
}

const dataPromise = getData();
// console.log(dataPromise);

dataPromise.then((res) => console.log(res));
*/
/////////////////////
//How do we use async with await(async await use for handling promise)
//before async await
/*
const p = new Promise((resolve, reject)=>{
  resolve("Promise Resolved Value..!");
});

function getData(){
  p.then((res)=>console.log(res));
}
getData();
*/
/////////////////////////
/*
//after using async await
const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved Value..!");
});

//await can only be used inside an async functon
async function handlePromise() {
  const val = await p; 
  console.log(val);
}
handlePromise();
*/
///////////////////////////
//diff between handling promise using async await and normal older way
//1. Old Way>
/*
const p = new Promise((resolve, reject) => {
  setTimeout(()=>{
    
  resolve("Promise Resolved Value..!");
  }, 10000); 
});

function getData(){
  //JS Engine will not wait for prom,ise to be resolved
  p.then((res)=>console.log(res));
  console.log("Namaste JS");
}
getData();
*/
////////////////////
/*
//2. New Way(async await)>
const p1 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    
  resolve("Promise Resolved Value..!");
  }, 40000); 
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    
  resolve("Promise Resolved Value..!");
  }, 20000); 
});

// async function handlePromise() {
//   console.log("Hello world");
//   //JS Engine was waiting for promise to resolved
//   const val = await p1; 
//   console.log("Namaste Javascript");
//   console.log(val);

//   // const val2 = await p1; 
//   // console.log("Namaste Javascript 2");
//   // console.log(val2);

//   const val2 = await p2; 
//   console.log("Namaste Javascript 2");
//   console.log(val2);
// }
async function handlePromise() {
  console.log("Hello world");
  //JS Engine suspend function execution of this promise and pull out from call stack and when the promise resolved it come back into call stack and execute it.
  const val = await p2; 
  console.log("Namaste Javascript");
  console.log(val);

  // const val2 = await p1; 
  // console.log("Namaste Javascript 2");
  // console.log(val2);

  const val2 = await p1; 
  console.log("Namaste Javascript 2");
  console.log(val2);
}
handlePromise();
*/
//////////////////////////////////////
/*
//real worl example of async await
const API_URL = "https://api.github.com/users/vaibhavgaje";
async function handlePromise() {
  //fetch is function given to us by browser not JS
  //fetch() function is basically a promise when this promise resolved it gives a response object(e.g. fetch()=>Response ), this object has body which is readable stream,
  // and suppose you have to convert this readable stream to json you need to do like something Response.json() {e.g. fetch()=>Response.json()},
  // and this .json() is again a promise, and when this json() promise resolved it gives a jsonValue ( e.g. fetch() => Response.json => jsonValue )

  const data = await fetch(API_URL);
  const jsonValue = await data.json();
  // fetch().then(res=>res.json().then(res=>consolelog())) // this is same working as above (line 131 and 132)
  console.log(jsonValue);

}
handlePromise();
*/
///////////////////////
//Error handling in async await
// here we not using .catch() like normal promises, we are using try catch here
// const API_URL = "https://api.github.com/users/vaibhavgaje";
const API_URL = "https://invalidarandomurl";
// error handling first way
// async function handlePromise() {
//   try {
//     const data = await fetch(API_URL);
//     const jsonValue = await data.json();
//     console.log(jsonValue);
//   } catch (err) {
//     console.log(err);
//   }
// }
// handlePromise();

// error handling second way
async function handlePromise() {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
}
handlePromise().catch((err) => console.log(err));
