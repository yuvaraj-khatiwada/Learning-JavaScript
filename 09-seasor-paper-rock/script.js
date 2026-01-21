let choices = document.querySelectorAll(".choice"); 
let msg = document.querySelector("#msg");
let userScore = 0;
let compScore = 0;
const compScorePara = document.querySelector("#comp-score");
const userScorePara = document.querySelector("#user-score");


const compGene = () => {
    const option = ['rock' , 'scissor' ,'paper']; 
    const randidx = Math.floor(Math.random() * 3);
    // js only generates from 0-1 random num and multiplying 3 help to get to idx 2 and floor help to make number without decimal
    return option[randidx];
}

const DrawGame = () => {
    console.log("Game was drawn");
    msg.innerText = "game is draw";
    msg.style.backgroundColor = "grey";
}
const showWinner = (userWin, userchoice , compchoice) => {
    if(userWin) {
        console.log("you win the game");
        msg.innerText = `your ${userchoice} win the ${compchoice}`;
        msg.style.backgroundColor = "Green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else {
        console.log("you lose the game");
        msg.innerText = `your ${userchoice} loose the ${compchoice}`;
        msg.style.backgroundColor = "Red";
        compScore++;
        compScorePara.innerText =compScore;
    }
}
let playgame = (userchoice) => {
    console.log("user choice is ", userchoice);
    const compchoice = compGene();
    console.log("comp choice is " , compchoice);
    if(userchoice === compchoice) {
        DrawGame();
    }
    else {
        let userWin = true;
        if(userchoice === 'rock') {
            userWin = compchoice === 'paper' ? false : true;
        }
        else if(userchoice === 'paper') {
            userWin = compchoice === 'scissor' ? false : true;
        }
        else {
            userWin = compchoice === 'rock' ? false : true;
        }
        showWinner(userWin , userchoice, compchoice);

    }
}




choices.forEach((choice) => {
    choice.addEventListener( "click" , () => {
        let userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});