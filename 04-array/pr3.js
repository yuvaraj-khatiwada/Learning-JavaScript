// create an array to store companies -> google , facebook , twitter , ibm , pathao
// remove first company , remove remover patho and ibm and add amazon 

let company = ['google', 'facebook' , 'twitter' , 'ibm' , 'pathao']
console.log(company);
company.shift();  // removes first item
console.log(company);
company.splice(2,2,'amazon'); // removes two item from 2 index and adds amazon 
console.log(company);
company.push("indrive"); // adds indrive at the last 
console.log(company);
