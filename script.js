const userScoreDisplay = document.querySelector("#userScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const textDisplay = document.querySelector("#textDisplay");
const btnStart = document.querySelector("#btnStart");
const btnContainer = document.querySelector(".btnContainer");
const btnChoice = document.querySelectorAll(".btnChoice");

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function playRound(userChoice, computerChoice) {
    // Check for a draw
    if (userChoice === computerChoice) {
        textDisplay.textContent = "The Draw!";
    }
    // Check if the human win
    else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        textDisplay.textContent = "You Win! The round.";
        userScore++;
        userScoreDisplay.textContent = userScore;
    }
    // Check if the human lose
    else {
        textDisplay.textContent = "You Lose! The round.";
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    if (userScore === 5) { 
        textDisplay.textContent = "You Win the Game!"
    }else if (computerScore === 5) { 
        textDisplay.textContent = "You Lose the Game!"
    }
    
    if (userScore === 5 || computerScore === 5) {
        btnContainer.style.display = "none";
        btnStart.textContent = "Play Again"
        btnStart.style.removeProperty("display");
    }
}

btnStart.addEventListener("click", () => { 
    btnStart.style.display = "none";
    btnContainer.style.removeProperty("display");
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    textDisplay.textContent = "";
});

btnChoice.forEach((choice) => 
    choice.addEventListener("click", () => {
        const computerChoice = getComputerChoice() 
        playRound(choice.textContent, computerChoice)
    })
);