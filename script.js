const choices = document.querySelectorAll("#choices img");

const gameResult = document.getElementById("gameResult");
const playerChoiceDiv = document.getElementById("playerChoice")
const computerChoiceDiv = document.getElementById("computerChoice")
const playerScoreDiv = document.getElementById("playerScore")
const computerScoreDiv = document.getElementById("computerScore")
const roundsDiv = document.getElementById("rounds")

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

let humanScore = 0;
let computerScore = 0;
let rounds = 0;
