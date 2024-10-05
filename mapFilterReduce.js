/*
//////////map//////////
const arr = [5, 1, 3, 2, 6];

function double(x){
    return x*2;
}

function tripple(x){
    return x*3;
}

// function binary(x){
//     return x.toString(2);
// }
const output = arr.map(double);
const output2 = arr.map(tripple);
// const output3 = arr.map(binary);
const output3 = arr.map((x) => x.toString(2));

console.log(output);
console.log(output2);
console.log(output3);
*/

//////////////filter////////////
/*const arr = [5, 1, 3, 2, 6];

//filter odd values
function isOdd(x){
    return x%2;
}

//filter even values
function isEven(x){
    return x%2 == 0;
}

//greater than 4
// function isgreterthan(x){
//     return x >4;
// }

const output = arr.filter(isOdd);
const output1 = arr.filter(isEven);
// const output2 = arr.filter(isgreterthan);
const output2 = arr.filter((x) => x >4);

console.log(output);
console.log(output1);
console.log(output2);
*/

/////////reduce///////
const arr = [5, 1, 3, 2, 6];

//sum of array
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(arr));

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr; //here acc(accumulator is like sum of above example) and curr(is current nothing but arr[i])
  return acc;
}, 0);
console.log(output);

//find max no in array
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));

const output1 = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(output1);

///////example//////
const users = [
  { firstName: "Vaibhav", lastName: "Gaje", age: 28 },
  { firstName: "Varun", lastName: "Patle", age: 28 },
  { firstName: "Rashmi", lastName: "Rinait", age: 25 },
  { firstName: "Uday", lastName: "Patle", age: 24 },
];

const output3 = users.map((x) => x.firstName + " " + x.lastName);
console.log(output3);

//acc = {28:2, 25:1, 24:1}

const output4 = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output4);

//firstname with age is less than 26
// const output5 = users.filter((x) => x.age < 26);
// const output5 = users.filter((x) => x.age < 26).map((x)=>x.firstName);
const output5 = users.reduce(function(acc, curr){
    if(curr.age<26){
        acc.push(curr.firstName);
    }
    return acc;
},[])
console.log(output5);
