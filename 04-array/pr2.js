// for a given set of the price [250, 330, 550, 333, 555, 1000] ther is 10% off in each so make a new price list 

let price = [250, 330, 550, 333, 555, 1000] ;
let newp, dis;
for (newprice of price) {
    console.log("before", newprice);
    newp = newprice - newprice * 0.1;
    console.log("after", newp);
}

for (let i=0;i<price.length;i++) {
    dis = price[i] / 10;
    price[i] -= dis; 
}
console.log(price);