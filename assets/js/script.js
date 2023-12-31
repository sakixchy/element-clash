/*Storing DOM in Variables */
let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const gameResult = document.querySelector('.game-text');
const fireDiv = document.getElementById('fire');
const waterDiv = document.getElementById('water');
const snowDiv = document.getElementById('snow');
const playButton = document.getElementById('playButton');
const modal = document.getElementById('game-modal');
const usernameInput = document.getElementById('username-input');
const happyPuffle = document.getElementById('happy-puffle');
const sadPuffle = document.getElementById('sad-puffle');
const restartButton = document.getElementById('restart-button');
const outcomeModal = document.getElementById('outcome-modal');
let username = '';
const footer = document.getElementById('footer');


/* Game Outcome Modal */
function checkWin() {
    if (userScore >= 10) {
        outcomeModal.style.display = 'block';
        document.querySelector('#username-outcome').textContent = username + " won!";
    }
    if (computerScore >= 10) {
        outcomeModal.style.display = 'block';
        document.querySelector('#username-outcome').textContent = username + " lost!";
    }
}


/* Username input shows in scoreboard */
document.addEventListener('DOMContentLoaded', function() {

    let usernameSpan = document.getElementById('username-score');  
    usernameInput.addEventListener('input', function() {
        username = this.value;
        usernameSpan.textContent = username; 
    });

});

/* Function for Happy and Sad Expression */
function showHappyPuffle () {
    happyPuffle.style.display = 'block';
    sadPuffle.style.display = 'none';
}

function showSadPuffle () {
    sadPuffle.style.display = 'block';
    happyPuffle.style.display = 'none';
}

/* Function for Computer Choice */
function getComputerChoice () {
    let choices = ['fire','water','snow'];
    let randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

/* Function for user win or lose and draw */
function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    gameResult.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
    checkWin();
}


function lose(userChoice, computerChoice) {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    gameResult.innerHTML = userChoice + " loses to " + computerChoice + ". You lost!";
    checkWin();
}

function draw(userChoice, computerChoice) {
    userScoreSpan.innerHTML = userScore;
    gameResult.innerHTML = userChoice + " vs " + computerChoice + ". It's a draw!";
    checkWin();
}

/* Game function for elements */
function game(userChoice) {
       let computerChoice = getComputerChoice();
       switch (userChoice + computerChoice) {
        case 'firesnow':
        case 'waterfire':
        case 'snowwater':
           win(userChoice, computerChoice);
           showHappyPuffle();
           break;
        case 'firewater':
        case 'watersnow':
        case 'snowfire':
            lose(userChoice, computerChoice);
            showSadPuffle();
            break;
        case 'firefire':
        case 'waterwater':
        case 'snowsnow':
            draw(userChoice, computerChoice);
            break;
  }
}


function main (){

/* Event listeners for clicking things */

    fireDiv.addEventListener('click', function() {
        game('fire');
    } );

    waterDiv.addEventListener('click', function() {
        game('water');
    } );

    snowDiv.addEventListener('click', function() {
        game('snow');
    } );

    playButton.addEventListener('click', function() {
        modal.style.display = 'none';
        footer.style.display = 'block';
    } );
    
    restartButton.addEventListener('click', function() {
        window.location.reload();
    });

    
}


main();