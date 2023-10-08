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

fireDiv.addEventListener('click', function() {
    console.log('Hey, you clicked on Fire!!!')
} )

waterDiv.addEventListener('click', function() {
    console.log('Hey, you clicked on Water!!!')
} )

snowDiv.addEventListener('click', function() {
    console.log('Hey, you clicked on Snow!!!')
} )

