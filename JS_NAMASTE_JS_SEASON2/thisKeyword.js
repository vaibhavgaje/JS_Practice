"use strict";

////this keywoord in global space
console.log(this); //globalObject - window

////this keywoord inside a function
function x() {
  //the value depends on strict / non strict mode
  console.log(this);
}
// x();

////this inside non-strict mode - (this substitution)
// If the value if this keywoord is undefuned or null this keyword will be replaced with globalObject only in non strict mode

////this keyword value depends on how the function is called (window)
x(); // undefined
window.x(); // window

////this keyword inside a object's method
// const obj = {
//   a: 10,
//   x: function () {
//     //when we create function inside an object then it called as method, here x is a method of an object obj.
//     console.log(this);
//     // console.log(this.a);
//   },
// };
// obj.x();

// const student = {
//     name: "Vaibhav",
//     printName: function () {
//     //   console.log(this);  // value of this is object that is student object
//       console.log(this.name);
//     },
//   };
//   student.printName();

//   const student2 ={
//     name:  "Deepika",
//   }

////call apply bind methods (sharing methods)
const student = {
  name: "Vaibhav",
  printName: function () {
    //when we create function inside an object then it called as method, here x is a method of an object obj.
    //   console.log(this);
    console.log(this.name);
  },
};
student.printName();

const student2 = {
  name: "Deepika",
};

student.printName.call(student2); //value of this = student2

//// this keyword inside arrow function
//arrow function do not have concept og this basically, they take the value of their lexical environment(context) where they are enclosed.

const obj = {
  //obj is enclosed in the lexical context which is global, so here global is lexical context for this arrow function so the this will be window object
  a: 10,
  x: () => {
    console.log(this);
  },
};
obj.x();

////this keyword inside the nested arrow function
const obj2 = {
  a: 10,
  x: function () {
    // console.log(this);
    const y = () => {
      //here arrow func is enclosed in another function which is an methos of obj2 object, so x function is enclosing lexical context of y arrow function.
      console.log(this); //here value of this is obj2
    };
    y();
  },
};
obj2.x();

////this keyword inside DOM
//<buttton onclick="alert(this)">Click Me</buttton>    this line in index.html
//this inside DOM element => reference to HTMLelement
//<buttton onclick="alert(this.tagName)">Click Me</buttton>   //output -- BUTTON

//this inside class, constructor -----> search for it
