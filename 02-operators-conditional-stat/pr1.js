// Get user to input a number using promt("Enter a number:") . check the number 
//  is multiple of 5 or not 
// note : alert and prompt function works in the browser so link with html
alert("hello!");  // one time alert 
let number = prompt("Enter any number  :"); // alert + takes message 
if (number % 5 == 0) {
    console.log("the number is multiple of 5");
}
else {
    console.log("The number is not multiple of 5");
}