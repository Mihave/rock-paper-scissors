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

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    const btns = document.querySelectorAll('button');
        
    btns.forEach((button) => {
        button.addEventListener('click', () => {
            let computerSelection = computerPlay()
            let winner = getWinner(button.id, computerSelection);
            console.log(button.id, computerSelection);

            windoc = document.querySelector('.winner');
            compdoc = document.querySelector('.computer');
            scoredoc = document.querySelector('.score');

            if (winner == "player") {
                    scorePlayer ++;
                    windoc.textContent = "You won!";
            }
            else if (winner == "computer") {
                    scoreComputer ++;
                    windoc.textContent = "You lost!";
            }
            else if (winner == "tie") {
                console.log("tie");
                windoc.textContent = "You tied!";
            }
            else {
                console.log("WRONG INPUT!!!");                    i--;
            }
            compdoc.textContent = `The computer chose: ${computerSelection}`;
            scoredoc.textContent = `player: ${scorePlayer} computer: ${scoreComputer}`;

            })  
        }

        )

    }

game()