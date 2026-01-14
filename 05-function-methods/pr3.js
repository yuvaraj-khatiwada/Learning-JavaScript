// Write a function called findLargest that:
// takes an array of numbers
// finds and returns the  largest number
// do not use sort()

function findLargest(numbers) {
   let largest = numbers[0];
   for(let i=0;i<numbers.length;i++) {
    if(numbers[i]> largest) {
        largest = numbers[i];
    }
   }

    return largest;
}

let numbers = [22,11, 2, 3, 5, 66, 77, 35, 64, 224, 43];
let x= findLargest(numbers);
console.log(x);