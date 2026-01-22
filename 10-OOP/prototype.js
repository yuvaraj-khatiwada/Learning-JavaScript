let student = {
    fname : 'yuvaraj khatiwada',
    mark : 55,
    age: 20,
    printmark : function () {
        console.log("mark is ", this.mark);
    }, // in browswer 
}

let fruit = ['apple', 'mango', 'banana'];
const employee = {
    calcTax() { // defining function inside object 
        console.log("tax rate is 13%"); // generally this is preferred
    },
    calcTax1: function() { // same work but different process 
        console.log("tax rate is 13%");
    },
};
const Yuvaraj = {
    salary : 50 ,
};
const khatiwada = {
    salary : 100 ,
    calcTax() {
        console.log("Tax rate is 20%"); // this will worl as it is inside the function 
    }
};
// __proto__ defining prototype 
Yuvaraj.__proto__ = employee; // from here we can access the yuvaraj obj and prototype of employee 
 // notes in note copy 
