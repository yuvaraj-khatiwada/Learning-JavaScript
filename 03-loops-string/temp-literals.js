// template literals 
// the phenomenan of writing inside ${} in template literasls is caleed string interpolation 

let sentence = `this is the template literals `;
console.log(sentence);
console.log(typeof sentence);  // string 

let obj = {
    item :  "pen",
    price : 10,
};
console.log("the name of item = ", obj["item"], "and price = ", obj["price"]);
console.log("the name of item = ", obj.item, "and price = ", obj.price);
result = `the name of the item is ${obj.item} and price is ${obj.price}`;
result1 = `the name of the item is ${obj["item"]} and price is ${obj["price"]}`;
console.log(result);
console.log(result1);

