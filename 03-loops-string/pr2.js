// create a game whereyou start with any random game numeber . ask the user 
// to keep guessing the game number until the user enter correct value.


let number= 19, i, guess;
do {
    guess = Number(prompt("Enter any number"));
    i++;
} while (guess != number);
console.log("you entered the correct number");