function getComputerChoice() {

    let randomNumber = Math.floor(Math.random()*3);

    if (randomNumber == 0) {
        return `rock`;
    } else if (randomNumber == 1) {
        return `paper`;
    } else if (randomNumber == 2) {
        return `scissors`;
    }
    
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        tiesScore++;
        return message = `It's a tie!`;
    } else if (playerSelection == `rock` && computerSelection == `paper`) {
        computerScore++;
        return message = `You lose! Paper beats Rock`;
    } else if (playerSelection == `rock` && computerSelection == `scissors`) {
        playerScore++;
        return message = `You won! Rock beats Scissors`;
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
        playerScore++;
        return message = `You won! Paper beats Rock`;
    } else if (playerSelection == `paper` && computerSelection == `scissors`) {
        computerScore++;
        return message = `You lose! Scissors beats Paper`;
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
        playerScore++;
        return message = `You won! Scissors beats Paper`;
    } else if (playerSelection == `scissors` && computerSelection == `rock`) {
        computerScore++;
        return message = `You lose! Rock beats Scissors`;
    }

}

function game() {
    
    for (let i = 0; i < 5; i++) {
        console.log(`Player: ${playerScore}, Computer: ${computerScore}, Ties: ${tiesScore}`);
        const playerSelection = prompt(`Choose your weapon: Rock, Paper or Scissors?`).toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(`You selected ${playerSelection}`);
        console.log(`Computer selected ${computerSelection}`);
        playRound(playerSelection, computerSelection);
        console.log(message);
        alert(message);
    }

    if (i = 4 && playerScore > computerScore) {
        console.log(`Player: ${playerScore} - Computer: ${computerScore} - Ties: ${tiesScore}. You are the winner!`);
        alert(`With ${playerScore} win rounds, you beat the computer!`);
    } else if (playerScore < computerScore) {
        console.log(`Player: ${playerScore} - Computer: ${computerScore} - Ties: ${tiesScore}. You lose!`);
        alert(`Oh no, the computer won ${computerScore} rounds, it's the winner!`);
    } else if (playerScore == computerScore) {
        console.log(`Player: ${playerScore} - Computer: ${computerScore} - Ties: ${tiesScore}. There was no winner! `);
        alert(`There was no winner, it's a tie!`);
    }
    
}

let computerScore = 0;
let playerScore = 0;
let tiesScore = 0;
let message = ``;
game();