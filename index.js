//function statement or function Declaration
function a(){
    console.log("a called");
}
a();

//function Expression
var b = function(){
    console.log("b called");
}
b();

//Anonymous Function
// function () {

// }

//Named Function Expression

//Diff bet Parameters & Arguments?
var b = function(param1, param2){ //param1 and param2 are parameters
    console.log("b called ", param1,param2);
}
b(1,2);//1 2 are arguments

//First Class Functions
   /*the ability to functions to be used as value and assigned to a variable and can be passed into another function and 
   can be return out from another function this ability all together is called as first class function*/
//Arrow Functions

