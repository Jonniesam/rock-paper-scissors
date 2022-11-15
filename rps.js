
//CPU randomly genterates a number 0-2 which corresponds to a choice of rock/paper/or scissors
function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3);  
    if(cpuChoice === 0) {
        return 'rock';
    } else if(cpuChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    } 
};



// Compares users selection vs computer selection
function playRound(getPlayerChoice, computerSelection) {
    if(getPlayerChoice === 'rock' && computerSelection === 'scissors' || computerSelection === 'scissors' && computerSelection === 'paper' || getPlayerChoice === 'paper' && computerSelection === 'rock') {
        return `User Wins! ${getPlayerChoice} beats ${computerSelection}!`
    } else if(getPlayerChoice === computerSelection) { 
        return 'Tie game!'
    } else {
        return `Computer Wins! ${computerSelection} beats ${getPlayerChoice}!`
    }
};

//Returns results of round
//console.log(playRound(getPlayerChoice, computerSelection));

function game() {
    let round = 0
    for(let i = 0; i < 5; i++){
    const computerSelection = getComputerChoice();
    const question = prompt("Choose 1: rock, paper, or scissors");
    const getPlayerChoice = question.toLowerCase();
    console.log(playRound(getPlayerChoice, computerSelection));
}
};

game();