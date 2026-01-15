// for a given array of numbers, print the square of each value using th forEach loop

let num = [1,2, 3, 4, 5, 6,7, 8, 9, 10];

// const sq = (val , idx) => {
//     console.log(idx,".",val , "=" ,val * val);
// }
// num.forEach(sq);

num.forEach((val,idx) => {
    console.log(idx, val *val);
});

// both ways are correct 