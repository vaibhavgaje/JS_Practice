// function x(){ //x is callback function
//     console.log("Namaste");
// }

// function y(x){   //y is higher order function
//     x();
// }

const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

//area/circumference/diameter are callback functions 

/* const calculate = function (arr, logic) { //calculate is the higher order function
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
}; */

Array.prototype.calculate = function (logic) { //calculate is the higher order function
    const output = [];
    for (let i = 0; i < this.length; i++) {
      output.push(logic(this[i]));
    }
    return output;
  };

console.log(radius.map(area)); //map is higher order function

console.log(radius.calculate(area));

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));
