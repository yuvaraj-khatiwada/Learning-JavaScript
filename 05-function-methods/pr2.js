//Create a function using the function keywoard that takes a string as 
// an argument and returns the number of vowel in the string  using arrow function 

let count = (str) => {
    let count= 0 , char;
    for(char of str) {
        if(char === 'a' ||char === 'e' || char === 'i' || char === 'o' || char === 'u' ) {
            count++
        }
    }
    console.log(count);
}
count("Yuvarajkhatiwada");