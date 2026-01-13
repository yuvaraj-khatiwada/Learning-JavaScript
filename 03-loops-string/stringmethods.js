// string methods are inbuild function  to manupulate the string 
str1 = "Yuvaraj ";
str2 = " KHATIWADA";
str3 = "   Yuvaraj Khatiwada";
console.log(str1.toUpperCase()); // YUVARAJ
st = str2.toLowerCase(); // khatiwada
console.log(st);
console.log(str3.trim()); // trim only removes space from end and beginning

// methods dont change variable of its original string it creates new with new vale 
// strings are immutable so to change make new variable
console.log(str2.slice(1,5)); // 0 to count and 1 to 4 include, 5 exclude
console.log(str3.concat(str1)); // joins str1 with str3
let add = str1 + str3.trim();
console.log(add);
console.log(str1 + str2 , "is learning java script");
console.log(str2.replace("A", "z")); // removes one first mathch 
console.log(str2.charAt(4));