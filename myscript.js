function getComputerChoice() {
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let result;
        if (humanChoice.toLowerCase() === 'rock') {
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
        else if (humanChoice.toLowerCase() === 'paper') {
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
        else if (humanChoice.toLowerCase() === 'scissors') {
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

        
        const resultContainer = document.querySelector('#result');
        resultContainer.textContent = announcement;

        const scoreContainer = document.querySelector('#score')
        scoreContainer.textContent = `Player Score: ${humanScore} | Computer Score: ${computerScore} `;

        if (humanScore == 5 || computerScore == 5){
            const para = document.createElement('p');
            para.textContent = `The winner is ${humanScore == 5? 'Player!' : 'Computer!'}`;
            scoreContainer.append(para);

            // Disable the buttons
            buttons.forEach((button) => button.disabled = true);

            // Create a reset button for game
            const button = document.createElement('button');
            button.textContent = 'Play Again';

            button.addEventListener('click', () => {
                // Reset the score
                humanScore = 0;
                computerScore = 0;
                // Clear the output
                resultContainer.textContent = '';
                para.textContent = ''
                scoreContainer.textContent = '';
                // Enable the buttons
                buttons.forEach((button) => button.disabled = false);
            });
            scoreContainer.appendChild(button);
        }

    }

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            playRound(event.target.textContent, getComputerChoice());
        });
    });
}

playGame();