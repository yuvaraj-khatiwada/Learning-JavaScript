// Create a new button element. give it a text "click me".
// background color of red and text color of white . 
// insert the button as the first element inside the body tag

let newBtn = document.createElement("button");
console.log(newBtn);
newBtn.innerText = "click me ";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "green";
document.body.prepend(newBtn);
// document.querySelector("body").prepend(newBtn);