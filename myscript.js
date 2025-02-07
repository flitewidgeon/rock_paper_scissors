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

console.log(getHumanChoice());