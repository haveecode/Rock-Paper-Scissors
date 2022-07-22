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
        return `It's a tie!`;
    } else if (playerSelection == `rock` && computerSelection == `paper`) {
        return `You lose! Paper beats Rock`;
    } else if (playerSelection == `rock` && computerSelection == `scissors`) {
        return `You won! Rock beats Scissors`;
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
        return `You won! Paper beats Rock`;
    } else if (playerSelection == `paper` && computerSelection == `scissors`) {
        return `You lose! Scissors beats Paper`;
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
        return `You won! Scissors beats Paper`;
    } else if (playerSelection == `scissors` && computerSelection == `rock`) {
        return `You lose! Rock beats Scissors`;
    }

}

const playerSelection = prompt(`Choose your weapon: Rock, Paper or Scissors?`).toLowerCase();
const computerSelection = getComputerChoice();
console.log(`You selected ${playerSelection}`);
console.log(`Computer selected ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection))