// create 3 div with common class name - "box" Access them 
// and add some unique text to each of them 

let box = document.querySelectorAll(".box");
console.dir(box);
let idx = 1;
for(div of box) {
    
    div.innerText = `this is ${idx} divison`
    idx++;
}
// box[0].innerText = "first divison";
// box[1].innerText = "Second divison";
// box[2].innerText = "third division";
