let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function getHumanChoice() {
    return prompt("Please type one of the following: Rock, Paper or Scissors");
}

function playRound(humanChoice, computerChoice) {
    // Convert the humanChoice parameter to be case-insensitive
    humanChoice = humanChoice.at(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    // Check for a draw
    if (humanChoice === computerChoice) {
        console.log(`The draw! ${humanChoice} and ${computerChoice}.`);
    }
    // Check if the human win
    else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    // Check if the human lose
    else if (
        (humanChoice === "Scissors" && computerChoice === "Rock") ||
        (humanChoice === "Rock" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Scissors")
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }else {
        console.log("Invalid choice.");
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    if (humanScore == computerScore) {
        console.log(`The draw!\nHuman Score: ${humanScore} | Computer Score: ${computerScore}`);
    }else if (humanScore > computerScore) {
        console.log(`You win!\nHuman Score: ${humanScore} | Computer Score: ${computerScore}`);
    }else {
        console.log(`You lose!\nHuman Score: ${humanScore} | Computer Score: ${computerScore}`);
    }
}

// playGame();