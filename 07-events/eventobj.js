// it is the special object that has details about the event 
// all events handler have access to the event objects properties and method 
// node.event = (e) => { handle here } e.target , e.type, e.clientx

let btn1 = document.querySelector(".btn1");
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientx);
}