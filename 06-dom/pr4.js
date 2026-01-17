// create a <p> tag in html, give it a class and some styling 
// now create a new class in css and try to append this class to the <p> element 
// did you notice , how you overwrite the class name when you add a new one?
// solve this problem using class list 

let paragraph = document.querySelector("p");
// paragraph.setAttribute("class", "newClass");
// doing this completely replaces so 
paragraph.classList.add("newClass");
// doing this combines the class 
// paragraph.classList.remove("newClass");
// this removes the given class