/*Storing DOM in Variables */
let userScore = 0;
let computerScore = 0;
let userScoreSpan = document.getElementById("user-score");
let computerScoreSpan = document.getElementById("computer-score");
let gameResult = document.querySelector('.result');
let fireDiv = document.getElementById('fire');
let waterDiv = document.getElementById('water');
let snowDiv = document.getElementById('snow');

/* Event listeners for clicking things */

function getComputerChoice () {
    let choices = ['fire','water','snow'];
    let randomNumber = (Math.floor(Math.random() * 3));
}
getComputerChoice();

function game (userChoice) {
       
}


function main (){

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