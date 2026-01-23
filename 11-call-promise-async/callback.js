function sum(a,b) {
    console.log(a +b);
}
function calculator (a,b, sumcallback) {
    sumcallback(a,b);
}
calculator(2,3,sum); 
// callback is a function which is passed as argument to another function 
// this is also example of synchronous program 