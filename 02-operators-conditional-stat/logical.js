// logical operator 
// AND &&  , OR || , NOT !
// for and operation both operations should be true
// for or operation any one opearation may be true 
// for not operation it changes the ture to false and vice versa
let a=4, b=4, c=3;
let cond1 = a>=b; // true
let cond2 = a==b; //true
console.log("cond1 & cond2 =", cond1 && cond2); // true
let cond3 = a<c;
console.log("cond1 or cond3 =", cond1 || cond3); // true
console.log("cond1 & cond3 =", cond1 && cond3); // false
let cond4 = a==c;
console.log("cond3 or cond4 = ", cond3 || cond4); //false
console.log("!(cond3 or cond4 = )", !(cond3 || cond4)); //true
