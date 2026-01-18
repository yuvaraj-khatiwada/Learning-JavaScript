// node.addEventListner(event, callback);
// node.addEventLister(event, callback);
// the callback reference should be same to remove

let btn = document.querySelector(".btn") ;
btn.addEventListener("click", () => {
    console.log("button was clicked once")
})
btn.addEventListener("click", () => {
    console.log("button was clicked twice")
})
let handler = () => {
    console.log("button was clicked thrice")
}
btn.addEventListener("click", handler)
btn.addEventListener("click", () => {
    console.log("button was clicked fourth")
})
btn.removeEventListener("click" , handler)
// here third one as removed 

let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click" , (evt) => {
    console.log("button was clicked again");
    console.log(evt);
    console.log(evt.type);
})