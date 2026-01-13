// prompt the user to enter their full name. Generate a username for them based on the input. start username with @ followed by their full name 
// and ending with the fullname length. 

let str = prompt("Enter your name");
let str1 = "@"
console.log(str1.concat(str, str.length));
let username = "@" + str + str.length;
console.log(username);

