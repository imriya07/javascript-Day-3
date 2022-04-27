
// undefined - If a variable is declared but not assigned any value yet,

// not defined, undefined, null
//not defined - Any variable which we try to access but not declared will throw us a reference Error: variable not defined
// console.log(myAge);//not defined

// undefined - If a variable is declared but not assigned any value yet, but if we try to access that variable then we will get the errror as undefined.
let myHobbies;
console.log(myHobbies);
myHobbies = "Skating";
console.log(myHobbies);

// null - Its a default value assigned by a user to the variable as long as th variable  has not been assigned its original /updated value

let amIadult = null;
console.log(amIadult)//null
amIadult = true;
console.log(amIadult)//true

//in global scope generally we are not able to access block scope variables,
//as long as there's Let/const keywords, 
// so it will give us a RefenceError: variable not defined. but for we can access them even on global scope space.
//console.log(fname);//
//console.log(lname);//
console.log(age);


//Hoisting - Its only supported with that of var keywords and with the function.
//Let and const keywords do not support hoisting.
//Let keyword variables cannot be accessed before declaration/ initialization 
console.log(game);//ReferenceError: Cannot access 'game' before initialization
let game = "cricket";

//var keyword variables are hoisted.
console.log(game2);//undefined
var game2;
game2 = "Badminton";
console.log(game2);//Badminton

//Note - For var keyword variables, if we try to access them before assigning values to
//the will give us undefined but the moment we declare a value to it, will give us the assigned value.

//Hoisting in functions

//functions are hoisted because of which can call then function before declaring the function.

add(3,4);//arguments

function add(){//parameters
    // let result = a + b;
    console.log(result);
    //console.log("hello and function");
}




