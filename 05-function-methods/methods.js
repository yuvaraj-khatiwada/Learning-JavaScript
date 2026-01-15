// map method 
// creates a new array with the result of some operation. the value its 
// called callback reutrns are used to form new array 
// arr.map(callbackFnx(value,index,array))
let num = [3, 56, 643, 2 , 6];
let newnum =num.map((sq) => {
    console.log(sq)
    return sq * sq;
})
console.log(newnum);

// filter -> creates new array of elements that gives true for a conditon /filter . 

let newarr = num.filter((even) => {
    return even % 2 == 0;
})
console.log(newarr); //  56, 2, 6

//reduce - > performs some opeartion and reduce the array to single value and return single value 

let sum = num.reduce((res, current) => { // calculates the sum 
  return res + current;   
}
);
console.log(sum);

let largest = num.reduce((prev , current) => {
    return prev > current ? prev : current; // ternary operator 
});
console.log(largest); // displays the larges number 