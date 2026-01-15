// Take a number n as input from the user. create an array of numbers from 1 to n
// use the reduce method to calculate fum of all the number in the array . 
// use the reduce method to calculate product of all numbers in the array 

let num = Number(prompt("Enter any number"));
let arr = [];
for(let i=1;i<=num; i++) {
    arr.push(i);
    // arr[i-1] = i;
}
console.log(arr);
sum = arr.reduce((prev, curre) => {
    return prev + curre;
});
prd = arr.reduce((prev,current) => {
    return prev * current;
})
console.log(`the sum of numbers is ${sum} and product of numbers is ${prd}`);

