// for a given set of age [44, 55, 33, 22, 1, 66, 30, 20] find their average
let age = [44, 55, 33, 22, 1, 66, 30, 20];
let average, sum=0;
for(let i=0; i<age.length; i++) {
    sum += age[i];
};
console.log(sum);
average = (sum / age.length);
console.log("Average of given numbers", age,  " is ", average);
