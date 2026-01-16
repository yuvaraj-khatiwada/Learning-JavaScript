//  getAttribute(attr) to get the attribute value 
// setAttribute(attr, value) to set the attribute val th 
// style -> node.style

let para  = document.querySelector("p");
console.log(para);
let id = para.getAttribute("id");
console.log(id);
let id1 = para.getAttribute("name");
console.log(id1)                  // till this to get attribute

id2 = para.setAttribute("name" , "sita");
console.log(para.getAttribute("name")) //  here shyam attribue is changed to sita

let deco = document.querySelector(".box")
deco.style.color = "green";
deco.style.fontSize = "10px";
console.log(deco.style); // assessing and addin style in 