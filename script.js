
let humanScore = 0;
let computerScore = 0;
let humanSelect;
let computerSelect;

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

function getHumanChoice() {
    return prompt("rock, paper or scissors?");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log("Computer chose: " + computerChoice);
    console.log("You chose: " + humanChoice);

    if (computerChoice == humanChoice) {
        console.log("TIE!!! No points");
    } else if (computerChoice == "rock") {
        switch (humanChoice) {
            case "paper":
                console.log("You win! Paper beats rock");
                humanScore++;
                break;
            case "scissors":
                console.log("You lose! Rock beats scissors");
                computerScore++;
                break;
        }
    } else if (computerChoice == "paper") {
        switch (humanChoice) {
            case "rock":
                console.log("You lose! Paper beats rock");
                computerScore++;
                break;
            case "scissors":
                console.log("You win! Scissors beat paper");
                humanScore++;
                break;
        }
    } else if (computerChoice == "scissors") {
        switch (humanChoice) {
            case "rock":
                console.log("You win! Rock beats scissors");
                humanScore++;
                break;
            case "paper":
                console.log("You lose! Scissors beats paper");
                computerScore++;
                break;
        }
    }

    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
    return;
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        humanSelect = getHumanChoice();
        computerSelect = getComputerChoice();
        playRound(humanSelect, computerSelect);
    }
}

playGame();
