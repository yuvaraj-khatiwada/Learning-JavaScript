// create a toggle button that changes the screen to dark- mode when clicked and light mode when clicked again 

let btn  = document.querySelector("#btn");
let mode = "light";
btn.addEventListener("click" ,  () => {
    if(mode === "light") {
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
       }
    else{
        mode = "light";
         document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(mode);
});
