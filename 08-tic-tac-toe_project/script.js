let box = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let turno = true; // playerx , playero
const win = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [2, 4, 6]];

box.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("box is clicked");
        if(turno) {
            btn.innerText = 'o';
            turno = false;

        }
        else{
            btn.innerText = 'x';
            turno = true;
        }
        btn.disabled = true;
        winner();
    });
});
const winner = () => {
    for(let pattern of win) {
        let pos1val = box[pattern[0]].innerText;
        let pos2val = box[pattern[1]].innerText;
        let pos3val = box[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner");
            }
        }
    }
}

