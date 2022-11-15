let playerScore = 0;
let cpuScore = 0;

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
    // When the user wins
    if(getPlayerChoice === 'rock' && computerSelection === 'scissors' || computerSelection === 'scissors' && computerSelection === 'paper' || getPlayerChoice === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return `User Wins! ${getPlayerChoice} beats ${computerSelection}!`
    //if it's a tie game
    } else if(getPlayerChoice === computerSelection) { 
        return 'Tie game!'
    //when the computer wins
    } else {
        cpuScore++;
        return `Computer Wins! ${computerSelection} beats ${getPlayerChoice}!`
    }
};

//Returns results of round

function game() {
    let round = 0
    for(let i = 0; i < 5; i++){
    const computerSelection = getComputerChoice();
    const question = prompt("Choose 1: rock, paper, or scissors");
    const getPlayerChoice = question.toLowerCase();
    round++;
    console.log(`Round ${round}`);
    console.log(playRound(getPlayerChoice, computerSelection));
    console.log(playerScore);
    console.log(cpuScore);
} if(playerScore > cpuScore){
    return 'Humans win!'
} else if(playerScore < cpuScore) {
    return 'Computers win!'
} else {
    return `It's a tie!`
}
};

console.log(game());