// arrow function is the compact way of writing the function 
// function sum(a,b) {
//     return a + b;
// }

const add = (a,b) => {
    console.log(a + b) ;
}
const multiply = (a,b) => {
    return a * b;
}

x = add(4,5); 
console.log(multiply(5,6));
console.log(add); //   prints the function not sum 
// arrow function is mostly used for small task 

let hello = () => {
    console.log("Hey Guys whats up !!");
}
console.log(hello());  // prints the item in console.log 

