// slice(): returns a piece of the array  slice(startidx, endidx);
// splice() : change original array (add, remove, replace);
let fname = ['ram', 'shyam', 'hari' , 'sita', 'thor', 'bhramha'];
console.log(fname);
console.log(fname.slice(1, 3));
fname.splice(2,2,'yuvaraj', 'anish'); // here from inde 2 remove 2 item 
 // and add 2 items as yuvaraj and anish 
console.log(fname);
console.log(fname.splice(2,0,'hello','hi')); // return nothing 
console.log(fname); // print addin hello and hi at index 2 and other element
fname.splice(3,1); // removes hi 
console.log(fname);

// can use for add , delte and replcae 



