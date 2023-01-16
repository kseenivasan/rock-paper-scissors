function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case "rock":
            if (computerSelection === "rock") {
                return "It's a tie!";
            }
            else if (computerSelection === "paper") {
                return "You lose! Paper beats Rock";
            }
            else {
                return "You win! Rock beats Scissors";
            }
        case "paper":
            if (computerSelection === "rock") {
                return "You win! Paper beats Rock";
            }
            else if (computerSelection === "paper") {
                return "It's a tie!";
            }
            else {
                return "You lose! Scissors beats Paper";
            }
        case "scissors":
            if (computerSelection === "rock") {
                return "You lose! Rock beats Scissors";
            }
            else if (computerSelection === "paper") {
                return "You win! Scissors beats Paper";
            }
            else {
                return "It's a tie!";
            }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));