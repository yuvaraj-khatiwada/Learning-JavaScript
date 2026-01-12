// for of loop is used for string and arrays 

let fname="yuvaraj", count=0;
for(let i of fname){  // iterator 
    console.log(i);
    count++;
}
console.log("the numbers of string in " ,fname , "is", count );

// for in loops is used for objects 

let student = {
    lname: "khatiwada",
    roll: 3 ,
    cgps: 7,
};
for(i in student) {
    console.log("key = ", i, "value = ", student[i]);
}