function getWinner(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "player";
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "computer";
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "computer";
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "player";
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "computer";
    }
    
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "player";
    }

    else if (playerSelection == "rock" && computerSelection == "rock") {
        return "tie";
    }

    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "tie";
    }

    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "tie";
    }

    else {
        return "false input"
    }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[getRandomInteger(0,2)];
}

function getPlayerSelection() {
    return prompt("rock, paper or scissors?").toLowerCase()
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = getPlayerSelection();

        let winner = getWinner(playerSelection, computerSelection);
        
        if (winner == "player") {
            scorePlayer ++;
        }
        else if (winner == "computer") {
            scoreComputer ++;
        }
        else if (winner == "tie") {
            console.log("tie");
        }
        else {
            console.log("WRONG INPUT!!!");
            i--;
        }
        console.log(`Player: ${scorePlayer}\nComputer: ${scoreComputer}`);
    }
}

game()