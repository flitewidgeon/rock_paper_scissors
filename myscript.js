function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    let choice;
    switch (randomNum) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function getHumanChoice(){
    let choice = prompt("Choose: rock, paper or scissors?")
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let result;
    if (humanChoice.toLowerCase() === 'rock'){
        switch (computerChoice) {
            case 'scissors':
                result = 'win'
                break;
            case 'rock':
                result = 'draw'
                break;
            case 'paper':
                result = 'lose'
                break;
        }
    }
    else if (humanChoice.toLowerCase() === 'paper'){
        switch (computerChoice) {
            case 'rock':
                result = 'win'
                break;
            case 'paper':
                result = 'draw'
                break;
            case 'scissors':
                result = 'lose'
                break;
        }
    }
    else if (humanChoice.toLowerCase() === 'scissors'){
        switch (computerChoice) {
            case 'paper':
                result = 'win'
                break;
            case 'scissors':
                result = 'draw'
                break;
            case 'rock':
                result = 'lose'
                break;
        }
    }
    
    let announcement;
    switch (result) {
        case 'win':
            announcement = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            break;
    
        case 'draw':
            announcement = 'It\'s a draw'
            break;

        case 'lose':
            announcement = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            break;
    }
    console.log(announcement);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(`Player Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);