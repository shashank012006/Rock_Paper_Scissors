console.log("Hello player ! ");



let humanScore = 0;
let computerScore = 0;

function getCC(){
    const items = ["rock","paper","scissors"];
    const randomc = Math.floor(Math.random()*items.length);
    return items[randomc]
}

function getHC(){
    // userInput = prompt("Enter rock,paper and scissors");
    // playc = userInput ? userInput.trim().toLowerCase() : "";
    // return playc
    const rockButton = document.getElementById("myButton");
    
    rockButton.addEventListener("click", () => {
        const choice = "rock";
        return choice
    });
}

function play(humanc,computerc){
    
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

for (i=0;i<=0;i++){
    const humanc = getHC();
    const computerc = getCC();
    play(humanc,computerc);
}

console.log("Total score for each : \n");
console.log("Player : " + humanScore + "  computer : " + computerScore);

if (humanScore == computerScore){
    console.log("Nice try Champ");
}
else if (humanScore > computerScore){
    console.log("Player is the final winner!");
}
else if (humanScore < computerScore){
    console.log("computer is the final winner!");

}