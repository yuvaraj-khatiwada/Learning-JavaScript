// methods are those things which does some work in program 
// arrays are mutable 
let veg = ['potato', 'tomato', 'cauliflower', 'brinjal', 'carrot'];
console.log(veg);
console.log(veg.push("onion")); // display the count (6) and push add value at the last 
console.log(veg);   // display list with including onion
veg.push('momo', 'chowmein', 'burger');
console.log(veg);
veg.pop();   // pop delte from last and return 
console.log(veg); // print list without burger 
console.log(veg.pop()); // delete last item i.e chowmein and display only chowmein 
let age = [11, 34, 53, 24, 44];
console.log(age.toString());
console.log(typeof age); // object 
let age1 = age.toString();
console.log(typeof age1); // string
console.log(veg.concat(age)); // joins two array 
let comb = age.unshift(55); // retun 6 as counts length after adding and change in age
console.log(comb);
console.log(age); // 
console.log(age.shift()); // return deleted from first and return also change in array


