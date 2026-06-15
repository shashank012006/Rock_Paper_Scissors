console.log("Hello player ! ");

const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorsButton = document.getElementById("scissorsBtn");

let humanScore = 0;
let computerScore = 0;

function getCC(){
    const items = ["rock","paper","scissors"];
    const randomc = Math.floor(Math.random()*items.length);
    return items[randomc]
}

function final(hs,cs){
    if (hs === cs){
        document.getElementById("iswinner").textContent = "It is a tie";
        document.getElementById("rest").textContent = "Click 'Reset Game' to play again.";
        document.getElementById("iswinner").style.color = "yellow";
        resetButton.style.display = "block";
        
    }
    else if (hs > cs){
        document.getElementById("iswinner").textContent = "Player congrats you have won";
        document.getElementById("rest").textContent = "Click 'Reset Game' to play again.";
        document.getElementById("iswinner").style.color = "Green";
        resetButton.style.display = "block";
    }
    else if (cs > hs){
        document.getElementById("iswinner").textContent = "you have lost ! ";
        document.getElementById("rest").textContent = "Click 'Reset Game' to play again.";
        document.getElementById("iswinner").style.color = "red";
        resetButton.style.display = "block";
    }
}

let minRound = 0;
const maxRound = 5;

function play(humanc,computerc){
    


    let humeanw = "player won";
    let computerw = "computer won";
    
    if (minRound>=maxRound){
        console.log("U have finished game ! ");
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return;
    }
    
    minRound++
    
    if (humanc === computerc){
        let tie = "It is a tie";
        document.getElementById("winnerRec").textContent = tie;
    }
    else if (humanc === "paper" && computerc === "rock"){
        document.getElementById("winnerRec").textContent = humeanw;
        humanScore ++;        
    }
    else if (humanc === "rock" && computerc === "paper"){
        document.getElementById("winnerRec").textContent = computerw;
        computerScore ++;
        
    }
    else if (humanc === "rock" && computerc === "scissors"){
        document.getElementById("winnerRec").textContent = humeanw;
        humanScore ++;
        
    }
    else if (humanc === "scissors" && computerc === "rock"){
        document.getElementById("winnerRec").textContent = computerw;
        computerScore ++;
        
    }
    else if (humanc === "scissors" && computerc === "paper"){
        document.getElementById("winnerRec").textContent = humeanw;
        humanScore ++;
        
    }
    else if (humanc === "paper" && computerc === "scissors"){
        document.getElementById("winnerRec").textContent = computerw;
        computerScore ++;
        
    }
    else{
        console.log("Invalid");
        
    }

    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;

    if (minRound === 5){
        final(humanScore,computerScore)
    }
}
    
rockButton.addEventListener("click", () => {
    play("rock",getCC());
});
    
paperButton.addEventListener("click", () => {
    play("paper",getCC());
});
    
scissorsButton.addEventListener("click", () => {
    play("scissors",getCC());
});

const resetButton = document.getElementById("resetBtn");

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    minRound = 0;

    document.getElementById("human-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;

    document.getElementById("winnerRec").textContent =
        "This game consists of 5 rounds. The player with the highest score after 5 rounds wins.";

    document.getElementById("iswinner").textContent = "";
    document.getElementById("rest").textContent = "";

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    resetButton.style.display = "none";
}

resetButton.addEventListener("click", resetGame);