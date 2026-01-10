//  numbers, string, boolean, undefined , null , bigint , symbol ..this is premitive  data type 

let old=20;
let price1=100.5;
const fullname="Yuvaraj ";
let isFollow= true;
let x;
let y=null;

let z=BigInt("123");
let h=Symbol("Hello");

console.log(typeof old);
console.log(typeof fullname);
console.log(typeof isFollow);
console.log(typeof x);
console.log(typeof h);

// non premitive data type -----> objects -> collection of data type

const student = {
    fname: "Yuvaraj Khatiwada",
    year : 20,
    gpa: 3.6,
    pass : true,
};
student["year"] = student["year"] +1;
// we can change the key of objects 
console.log(student.year);
console.log(student["year"]);
console.log(typeof student)
console.log(typeof student["fname"]);