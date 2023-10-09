/*Storing DOM in Variables */
let userScore = 0;
let computerScore = 0;
let userScoreSpan = document.getElementById("user-score");
let computerScoreSpan = document.getElementById("computer-score");
let gameResult = document.querySelector('.result');
let fireDiv = document.getElementById('fire');
let waterDiv = document.getElementById('water');
let snowDiv = document.getElementById('snow');


/* Function for Computer Choice */
function getComputerChoice () {
    let choices = ['fire','water','snow'];
    let randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    gameResult.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
}

function lose() {
   
}

function draw() {

}

function game(userChoice) {
       let computerChoice = getComputerChoice();
       switch (userChoice + computerChoice) {
        case 'firesnow':
        case 'waterfire':
        case 'snowwater':
           win(userChoice, computerChoice);
           break;
        case 'firewater':
        case 'watersnow':
        case 'snowfire':
            lose(userChoice, computerChoice);
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
    } )

    waterDiv.addEventListener('click', function() {
        game('water');
    } )

    snowDiv.addEventListener('click', function() {
        game('snow');
    } )
} 


main();