function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*3);
    return choices[choice];
}

const buttons = document.querySelectorAll('button');

buttons.forEach( button => button.addEventListener('click', playRound));

let resultDisplay = document.querySelector(".results");

let playerScore = 0;
let compScore = 0;

function playRound() {
    let compChoice = getComputerChoice();
    let message = "";
    switch (this.textContent.toLowerCase()) {
        case "rock":
            if (compChoice === "rock") {
                message = "It's a tie! Your choice: " + this.textContent.toLowerCase() + " Computer choice: " + compChoice;
            }
            else if (compChoice === "paper") {
                message = "You lose! Your choice: " + this.textContent.toLowerCase() + " Computer choice: " + compChoice;
                compScore++;
            }
            else {
                message = "You win! Your choice: " + this.textContent.toLowerCase() + " Computer choice: " + compChoice;
                playerScore++;
            }
            break;
        case "paper":
            if (compChoice === "rock") {
                message = "You win! Your choice: " + this.textContent.toLowerCase() + " Computer choice: " + compChoice;
                playerScore++;
            }
            else if (compChoice === "paper") {
                message = "It's a tie! Your choice: " + this.textContent.toLowerCase() + " Computer choice: " + compChoice;
            }
            else {
                message = "You lose! Your choice: " + this.textContent.toLowerCase() + " Computer choice: " + compChoice;
                compScore++;
            }
            break;
        case "scissors":
            if (compChoice === "rock") {
                message = "You lose! Your choice: " + this.textContent.toLowerCase() + " Computer choice: " + compChoice;
                compScore++;
            }
            else if (compChoice === "paper") {
                message = "You win! Your choice: " + this.textContent.toLowerCase() + " Computer choice: " + compChoice;
                playerScore++;
            }
            else {
                message = "It's a tie! Your choice: " + this.textContent.toLowerCase() + " Computer choice: " + compChoice;
            }
            break;
    }
    if (playerScore === 5) {
        resultDisplay.textContent = message + " Game over! You win!";
        buttons.forEach(button => button.removeEventListener('click', playRound));
    }
    else if (compScore === 5) {
        resultDisplay.textContent = message + " Game over! Computer wins!";
        buttons.forEach(button => button.removeEventListener('click', playRound));
    }
    else {
        resultDisplay.textContent = message + ". Your score: " + playerScore + " Computer score: " + compScore;
    }
    
}