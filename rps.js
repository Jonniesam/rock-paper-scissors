
//CPU randomly genterates a number 0-2 which corresponds to a choice of rock/paper/or scissors
function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3);
    
    if(cpuChoice === 0) {
        return 'rock';
    } else if(cpuChoice === 1) {
        return 'paper';
    } else if (cpuChoice === 2) {
        return 'scissors';
    } else {
        return 'error';
    }
};

//Turns function into a variable
const computerSelection = getComputerChoice();
//console.log(computerSelection);

//Asks user to select a choice
const question = prompt("Choose 1: rock, paper, or scissors")

//Converts choice to lower case which is used for the 
const getPlayerChoice = question.toLowerCase();
//console.log(getPlayerChoice);


// Compares users selection vs computer selection
function playRound(getPlayerChoice, computerSelection) {
    if(getPlayerChoice === 'rock' && computerSelection === 'scissors' || getPlayerChoice === 'scissors' && computerSelection === 'paper' || getPlayerChoice === 'paper' && computerSelection === 'rock') {
        return `User Wins! ${getPlayerChoice} beats ${computerSelection}!`
    } else if(getPlayerChoice === computerSelection) { 
        return 'Tie game!'
    } else {
        return `Computer Wins! ${computerSelection} beats ${getPlayerChoice}!`
    }
};

//Returns results of round
console.log(playRound(getPlayerChoice, computerSelection));