let box = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true; // playerx , playero
const win = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [2, 4, 6]];

box.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("box is clicked");
        if(turno) {
            btn.style.color = "green";
            btn.innerText = 'o';
            turno = false;

        }
        else{
            btn.style.color = "red";
            btn.innerText = 'x';
            turno = true;
        }
        btn.disabled = true;
        winner();
    });
});
const resetGame = () => {
    turno =true;
    enableBox();
    msgContainer.classList.add("hide");
}
const disableBox = () => {
    for(let boxes of box) {
        boxes.disabled = true;
    }
}
const enableBox = () => {
    for(let boxes of box) {
        boxes.disabled = false;
        boxes.innerText = '';
    }
}
const showWinner = (winner) =>{
    msg.innerText = `congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}
const winner = () => {
    for(let pattern of win) {
        let pos1val = box[pattern[0]].innerText;
        let pos2val = box[pattern[1]].innerText;
        let pos3val = box[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
}
newGameBtn.addEventListener("click" , resetGame);
reset.addEventListener("click" , resetGame);

