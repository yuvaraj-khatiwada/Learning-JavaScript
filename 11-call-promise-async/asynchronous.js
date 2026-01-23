// function hello() {
//     console.log("hello");
// }
// setTimeout(hello , 2000); // time in milli  second means it is 2second 
console.log("one");
console.log("two");
setTimeout(() => {
    console.log("hello");
}, 2000); // same function in arrow function 
console.log("three");
console.log("four");

// here al one four consle will print and after 2 second hello will be printed 