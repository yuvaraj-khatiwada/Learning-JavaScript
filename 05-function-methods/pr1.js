//Create a function using the function keywoard that takes a string as 
// an argument and returns the number of vowel in the string 

// function count(a) {
//     let count = 0;
//     for ( i=0;i<a.length;i++) {
//         if(a.charAt(i) == 'a')
//             count++;
//         if(a.charAt(i) == 'e')
//             count++;
//         if(a.charAt(i) == 'i')
//             count++;
//         if(a.charAt(i) == 'o')
//             count++;
//         if(a.charAt(i) == 'u')
//             count++;
//     }
//     return count;
// }

function count(str) {
    let count=0;
    let char;
    for(char of str) {
        if (char === "a" || char === "e" || char === "i" ||char === "o" ||char === "u" ) {
            count++;
        }
    }
    return count;
}

let x = count("yuvaraj");
console.log(x); 
//we can perform from the both steps 



