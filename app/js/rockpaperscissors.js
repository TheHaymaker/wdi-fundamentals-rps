////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

var winner;
function getWinner(playerMove,computerMove) {
    
    if(playerMove === computerMove) {
        winner = "tie";
        return "The result is a " + winner + ".";
    }
    
    if(playerMove === "rock") {
        if (computerMove === "scissors") {
            winner = "player";
        }
        else winner = "computer";
    }

    if(playerMove === "paper") {
        if(computerMove === "rock") {
            winner = "player";
        } else winner = "computer";
        }

    if(playerMove === "scissors") {
        if(computerMove === "rock") {
            winner = "computer";
        } else winner = "player";
    }
    return "The " + winner + " wins this round.";
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors! You ready? Let's get started.");
    var playerWins = 0;
    var computerWins = 0;
    for(var counter = 0; playerWins < 5 && computerWins < 5; counter += 1) {
        var playerMove = getPlayerMove(getInput());
        console.log("You played " + playerMove + ".")
        var computerMove = getComputerMove(randomPlay());
        console.log("The computer played " + computerMove + ".")
        getWinner(playerMove, computerMove);
        
        if(winner === "tie") {
            console.log("Try again.");
        } else if(winner === "computer") {
            computerWins += 1;
            console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
        } else if(winner === "player") {
            playerWins += 1;
            console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
        }
    }

playToFive();












