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
    

    if (minRound>=maxRound){
        console.log("U have finished game ! ");
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return;
    }

    minRound++
    
    if (humanc === computerc){
        console.log("it is tie");
    }
    else if (humanc === "paper" && computerc === "rock"){
        console.log("player won");
        humanScore += 1;
    
    }
    else if (humanc === "rock" && computerc === "paper"){
        console.log("computer won");
        computerScore += 1;
    
    }
    else if (humanc === "rock" && computerc === "scissors"){
        console.log("player won");
        humanScore += 1;
    
    }
    else if (humanc === "scissors" && computerc === "rock"){
        console.log("computer won");
        computerScore += 1;
    
    }
    else if (humanc === "scissors" && computerc === "paper"){
        console.log("player won");
        humanScore += 1;
    
    }
    else if (humanc === "paper" && computerc === "scissors"){
        console.log("computer won");
        computerScore += 1;
    
    }
    else{
        console.log("Invalid");
    
    }
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


