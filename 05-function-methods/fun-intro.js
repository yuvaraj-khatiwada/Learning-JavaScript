// function is a block of code that performs specific tasks . we can invoke a function whenever needed 
// functions helps to reduce redundancy in the code i.e repetative nature 

function functionName() {   // function creation 
    console.log("Hy ther I am currentyle learning the function");
    console.log("Learing regularly so that i can improve my coding ");
}

functionName(); // calling function 
 
function name(hello) {   // parameter 
    console.log(hello);
}

let hello = "Yuvaraj khatiwada";
name(hello);  // argument 

function sum(a,b) {
    console.log(a + b);
}
sum(3,4);

function diff(a,b) {  // here a and b which are parameters are local vaiable and block scope means lives within the function 
    d = a-b;
    return d;    // function returning some value 
}

let val = diff(6,5); // storing the returned value is some variable 
console.log(val);