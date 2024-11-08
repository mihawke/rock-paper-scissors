const choices = document.querySelectorAll("#options img");
const gameResult = document.getElementById("gameResult");
const playerChoiceDiv = document.getElementById("playerChoice")
const computerChoiceDiv = document.getElementById("computerChoice")
const playerScoreDiv = document.getElementById("playerScore")
const computerScoreDiv = document.getElementById("computerScore")
const roundsDiv = document.getElementById("rounds")
const restartBtn = document.getElementById("restart")
const resultDialog = document.querySelector("dialog")
const endgameBtn = document.getElementById("endGame")

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

endgameBtn.addEventListener('click', () => {
    // Clear previous content inside resultDialog
    resultDialog.innerHTML = '';

    const resultDiv = document.createElement('div');
    const roundsDiv = document.createElement('div');
    const playerScoreDiv = document.createElement('div');
    const computerScoreDiv = document.createElement('div');

    if (humanScore > computerScore) {
        roundsDiv.textContent = `Total Rounds: ${rounds}`;
        playerScoreDiv.textContent = `Player: ${humanScore}`;
        computerScoreDiv.textContent = `Computer: ${computerScore}`;
        resultDiv.textContent = 'You Win!';
    }
    else if (humanScore == computerScore) {
        roundsDiv.textContent = `Total Rounds: ${rounds}`;
        playerScoreDiv.textContent = `Player: ${humanScore}`;
        computerScoreDiv.textContent = `Computer: ${computerScore}`;
        resultDiv.textContent = "It's a tie!";
    }
    else {
        roundsDiv.textContent = `Total Rounds: ${rounds}`;
        playerScoreDiv.textContent = `Player: ${humanScore}`;
        computerScoreDiv.textContent = `Computer: ${computerScore}`;
        resultDiv.textContent = 'You Lose!';
    }

    // Append the new result and show the dialog
    resultDialog.appendChild(resultDiv);
    resultDialog.appendChild(roundsDiv);
    resultDialog.appendChild(playerScoreDiv);
    resultDialog.appendChild(computerScoreDiv);

    resultDialog.showModal();
});


restartBtn.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    rounds = 0;
    roundsDiv.textContent = 0;
    gameResult.textContent = ``
    playerChoiceDiv.textContent = ``
    computerChoiceDiv.textContent = ``
    playerScoreDiv.textContent = 0
    computerScoreDiv.textContent = 0
})
choices.forEach((image) =>
    image.addEventListener("click", () => {
        rounds += 1;
        roundsDiv.textContent = rounds;
        const humanSelection = image.id;
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection)
        gameResult.textContent = `${result}`
        playerChoiceDiv.textContent = `${humanSelection}`
        computerChoiceDiv.textContent = `${computerSelection}`
        playerScoreDiv.textContent = `${humanScore}`
        computerScoreDiv.textContent = `${computerScore}`
    })
)

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    if (num == 0) {
        return "rock"
    }
    else if (num == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "A tie!"
    }
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        humanScore += 1;
        return `You Win, ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore += 1;
        return `You lose, ${computerChoice} beats ${humanChoice}`;
    }

}
