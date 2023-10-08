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
getComputerChoice();

function game(userChoice) {
       let computerChoice = getComputerChoice();
       switch (userChoice + computerChoice) {
        case 'firesnow':
        case 'waterfire':
        case 'snowwater':
           console.log('User wins!!!');
           break;
        case 'firewater':
        case 'watersnow':
        case 'snowfire':
            console.log('User loses!!!');
            break;
        case 'firefire':
        case 'waterwater':
        case 'snowsnow':
            console.log('Its a tie!!!');
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