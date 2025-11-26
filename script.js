
let humanScore = 0;
let computerScore = 0;
let humanSelect;
let computerSelect;
let buttons = document.querySelectorAll("button");
let container = document.querySelector(".container");
let round = 1;

buttons.forEach(button =>
    button.addEventListener("click", () => {
        humanSelect = button.textContent;
        computerSelect = getComputerChoice();
        playRound(humanSelect, computerSelect);
        return;
    })
)


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";

        case 1:
            return "paper";

        case 2:
            return "scissors";
    }

}

function playRound(humanChoice, computerChoice) {
    let roundDisplay = document.createElement("h3");
    roundDisplay.style.marginBottom = "0";
    let computerDisplay = document.createElement("div");
    let playerDisplay = document.createElement("div");
    humanChoice = humanChoice.toLowerCase();

    roundDisplay.textContent = "ROUND " + round;
    round++;

    computerDisplay.textContent = "Computer chose: " + computerChoice;
    playerDisplay.textContent = "You chose: " + humanChoice;

    container.appendChild(roundDisplay);
    container.appendChild(playerDisplay);
    container.appendChild(computerDisplay);

    let message = document.createElement("div");
    if (computerChoice == humanChoice) {
        message.textContent = "TIE!!! No points";
        message.style.color = "blue";
    } else if (computerChoice == "rock") {
        switch (humanChoice) {
            case "paper":
                message.textContent = "You win! Paper beats rock";
                message.style.color = "green";
                humanScore++;
                break;
            case "scissors":
                message.textContent = "You lose! Rock beats scissors";
                message.style.color = "red";
                computerScore++;
                break;
        }
    } else if (computerChoice == "paper") {
        switch (humanChoice) {
            case "rock":
                message.textContent = "You lose! Paper beats rock";
                message.style.color = "red";
                computerScore++;
                break;
            case "scissors":
                message.textContent = "You win! Scissors beat paper";
                message.style.color = "green";
                humanScore++;
                break;
        }
    } else if (computerChoice == "scissors") {
        switch (humanChoice) {
            case "rock":
                message.textContent = "You win! Rock beats scissors";
                message.style.color = "green";
                humanScore++;
                break;
            case "paper":
                message.textContent = "You lose! Scissors beats paper";
                message.style.color = "red";
                computerScore++;
                break;
        }
    }
    container.appendChild(message);

    let humanScoreboard = document.createElement("div");
    let compScoreboard = document.createElement("div");
    humanScoreboard.textContent = "Your score: " + humanScore;
    compScoreboard.textContent = "Computer score: " + computerScore;
    container.appendChild(humanScoreboard);
    container.appendChild(compScoreboard);

    let victoryMessage = document.createElement("h1");
    if (humanScore == 5) {
        victoryMessage.textContent = "YOU WON 5 ROUNDS!!! COMPUTER LOSES";
        victoryMessage.style.color = "green";
        container.appendChild(victoryMessage);
        reset();
    } else if (computerScore == 5) {
        victoryMessage.textContent = "COMPUTER WINS 5 ROUNDS!!! YOU LOSE";
        victoryMessage.style.color = "red";
        container.appendChild(victoryMessage);
        reset();
    }

    container.appendChild(document.createElement("br"));

    return;
}

function reset() {
    round = 1;
    humanScore = 0;
    computerScore = 0;
}

// function getHumanChoice() {
//     return prompt("rock, paper or scissors?");
// }


// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         humanSelect = getHumanChoice();
//         computerSelect = getComputerChoice();
//         playRound(humanSelect, computerSelect);
//     }
// }

// playGame();
