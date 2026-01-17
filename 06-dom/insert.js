// insert element 1. create and 2. add 
let el=document.createElement("button");
let heading = document.createElement("h2");
let division = document.createElement("div");
division.innerText = "this is the example of divisoin creation"
heading.innerText = "this is the heading two ";
console.log(el); 
el.innerHTML = "<em>click me</me";
ul = document.querySelector("ul");
ul.append(el) ;  // Adds at the end of the node (inside)
document.querySelector("body").prepend(heading); // adds at the start of the node (inside)
document.querySelector("ul").before(division); // adds before the node (outside) 
document.querySelector("ul").after(division);  // adds after the node (outside) 

// delete Elements node.remove()

division.remove(); // after accessing the node i can easily delte any element easily 