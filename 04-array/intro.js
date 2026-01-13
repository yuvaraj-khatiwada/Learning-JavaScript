// array is the collection of items
let mark = [ 90 ,78, 33, 23 , 55, 33];
console.log(mark);
console.log(typeof mark); // object
console.log(mark[4]); // 55
mark[4]= 60;
console.log(mark);
console.log(mark.length);
let fname= ['ironman', 'batman', 'spiderman', 'superman'];
for(let i=0;i<fname.length;i++) {    // for loop
    console.log(i+1,".",fname[i]);
};
let cities = ['kathmandu', 'lalitpur', 'bhaktapur' , 'sindhupalchok'];
for( city of cities) {             //  for of loop
    console.log(city.toUpperCase());
};