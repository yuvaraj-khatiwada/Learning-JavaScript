// the change in the state of an object is known as event
// events are fired to notify code of "interestion changes" that may affect code execution.
// mouse event (click , doubleclick etc)
// keyboard events(keypress, keyup,keydowm)
// form event (submit etc)
// print event and many more 
// node.event = () => {}
// if we define multipler handler for same node then the last one only exectures and also code in js works if also written in inline then 

let btn = document.querySelector(".btn");
btn.onclick = () => {
    console.log("hello you are clicking the button ");
};
let para = document.querySelector("#para");
para.onmouseover = () => {
    console.log("you reached the cursor ")
}