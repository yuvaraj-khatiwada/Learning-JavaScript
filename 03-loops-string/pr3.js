// same qn from 2 with diff logic

let num=19;
let guess = Number(prompt("Enter any number"));

while (num !== guess) {
    guess= Number(prompt("You entered incorrect retry "));
}
console.log("congratulations you succed");