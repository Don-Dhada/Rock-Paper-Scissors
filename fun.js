//CREATE A VARIABLE FOR USER AND COMP SCORE
let userScore = 0;
let computerScore = 0;

//CREATE A VARIABLE FOR EVERY NEEDED ELEMENT, SPECIFY THE TAGS AND CALL THEM BY ID 
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//CREATE FUNCTION FOR COMP CHOICE,INTRODUCE MATH FUNCTION THAT ALLOWS THE COMP TO MAKE RANDOM CHOICES
function getComputerChoice () {
const choices = ['r', 'p', 's'];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    else if (letter === "p") return "Paper";
    return "Scissors";
}

//CREATE A FUNCTION THAT CAUSES INCREMENT IN USER SCORE WHENEVER THE USER WINS
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " Won " + convertToWord(computerChoice) + ", User got this one...lol";
}

//CREATE A FUNCTION THAT CAUSES INCREMENT IN COMPUTER SCORE WHENEVER USER LOSE
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " Lost to " + convertToWord(computerChoice) + ", Comp got this one...damn";
}

//CREATE A FUNCTION FOR DRAW, INCASE USER AND COMPUTER CHOICE ARE THE SAME
function draw(userChoice, computerChoice) {
    result_p.innerHTML = convertToWord(userChoice) + " Equal " + convertToWord(computerChoice) + ", Dude it's a draw...ta daaa";
}

function game(userChoice) {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {

    //CREATE ARGUMENTS THAT DEFINES USER'S WINNING
    case "rs":
    case "pr":
    case "sp":
   win(userChoice, computerChoice);
   break;

   //CREATE ARGUMENTS THAT DEFINES USER'S LOSING
    case "rp":
    case "ps":
    case "sr":
    lose(userChoice, computerChoice);
    break;

    //CREATE ARGUMENTS THAT DEFINES DRAW IN LIKE CHOICES
    case "rr":
    case "pp":
    case "ss":
    draw(userChoice, computerChoice);
    break;
    }
}

//CREATE AN 'ONCLICK' EVENT LISTENER,CREATE A FUNCTION WITH AN ARGUMENT FOR THE GAME AND WRAP IT ALL IN ONE FUNCTION
function main() {
    rock_div.addEventListener('click', function() {
    game("r");
    })

    paper_div.addEventListener('click', function() {
    game("p");
    })

    scissors_div.addEventListener('click', function() {
    game("s");
    })
}

//CALL THE FUNCTION
main();

