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
}
    
const computerc = getCC();
rockButton.addEventListener("click", () => {
    play("rock",computerc);
});
    
paperButton.addEventListener("click", () => {
    play("paper",computerc);
});
    
scissorsButton.addEventListener("click", () => {
    play("scissors",computerc);
});

