function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case "rock":
            if (computerSelection === "rock") {
                return "It's a tie! Your choice:" + playerSelection.toLowerCase() + " Computer choice: " + computerSelection;
            }
            else if (computerSelection === "paper") {
                return "You lose! Your choice:" + playerSelection.toLowerCase() + " Computer choice: " + computerSelection;
            }
            else {
                return "You win! Your choice:" + playerSelection.toLowerCase() + " Computer choice: " + computerSelection;
            }
        case "paper":
            if (computerSelection === "rock") {
                return "You win! Your choice:" + playerSelection.toLowerCase() + " Computer choice: " + computerSelection;
            }
            else if (computerSelection === "paper") {
                return "It's a tie! Your choice:" + playerSelection.toLowerCase() + " Computer choice: " + computerSelection;
            }
            else {
                return "You lose! Your choice:" + playerSelection.toLowerCase() + " Computer choice: " + computerSelection;
            }
        case "scissors":
            if (computerSelection === "rock") {
                return "You lose! Your choice:" + playerSelection.toLowerCase() + " Computer choice: " + computerSelection;
            }
            else if (computerSelection === "paper") {
                return "You win! Your choice:" + playerSelection.toLowerCase() + " Computer choice: " + computerSelection;
            }
            else {
                return "It's a tie! Your choice:" + playerSelection.toLowerCase() + " Computer choice: " + computerSelection;
            }
    }
}
function game() {
    let choice;
    let score;
    for (let i = 0; i < 5; i++) {
        choice = prompt("Playing round " + (i + 1) +", please enter your choice (rock, paper, scissors)");
        let result = playRound(choice,getComputerChoice());
        console.log(result);
        if (result.charAt(0) === "Y") {
            if (result.charAt(4) === "w") {
                score++;
            }
        }
    }

    console.log("Thank you for playing! You played 5 rounds of Rock-Paper-Scissors, and won" + score + "times");
}