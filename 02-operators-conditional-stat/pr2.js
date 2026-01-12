//write a code which can give grades to the student according to score 

let mark = Number(prompt("Enter the mark obtained in your examination :")); // converts into number 

if(mark>90 && mark <=100) {
    console.log("GREAT yout grade is A+");
}
else if(mark>80 && mark <=90) {
    console.log("VERY GOOD yout grade is A");
}
else if(mark>70 && mark <=80) {
    console.log("GOOD yout grade is B+");
}
else if(mark>60 && mark <=70) {
    console.log("NICE yout grade is B");
}
else if(mark>50 && mark <=60) {
    console.log("ACCEPTABLE yout grade is C+");
}
else {
    console.log("you have scored too low.. FAILED!!");
}