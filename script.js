//Start server side options
var playerchoice = "";
var playerchoiceStr;
var wantstoplay = false

//set up win/tie/loss variables
var win
var lost
var tie

//check if the player wants to play, store this to wantstoplay variable
wantstoplay = confirm("Would you like to play a game");

//if the player wants to play, we will play the game within this while loop
while (wantstoplay){

    //this correct responses array will let us know which reponses are allowed
    //for the player and we will use this as a reference later
    var correctResponsesArray = ["R", "r", "P", "p", "S", "s"];

    //here we have a while loop with the condition that while
    //playerchoice is not equal to anything inside the correct
    //response array, we keep prompting the user to do it correctly
    while (!correctResponsesArray.includes(playerchoice)) {
        playerchoice = prompt("Rock, Paper, Scissors.\nType R, P, S to play.")
    }


    //now we want to make our playerchoiceStr the full word
    if (playerchoice === 'R' || playerchoice === 'r') {
        playerchoiceStr = "rock";
    } else if (playerchoice === 'P' || playerchoice === 'p') {
        playerchoiceStr = 'paper';
    } else {
        playerchoiceStr = 'scissors';
    } 

    //Computer side
    var compchoice;
    var compchoiceStr;

    //with the Math.floor(Math.random() * (3)
    //we have set up a non-inclusive maximum for the number randomizer
    //so that means this can only result in 0 1 or 2
    compchoice = Math.floor(Math.random() * (3))

    //now we want to make our compchoiceStr either rock paper or scissors
    //depending on what number we got above
    if (compchoice === 0) {
        compchoiceStr = "rock";
    } else if (compchoice === 1) {
        compchoiceStr = "paper";
    } else {
        compchoiceStr = "scissors";
    }

    //these if statements will let us know if the player won/lost or tied
    //with the computer

    //this first one checks if they are equal, if so this is a tie
    if (playerchoiceStr === compchoiceStr) {
        //increment the tie score by 1 with the ++ notation
        tie++;

        //alert the user of the tie
        alert("Wow!! You tied! Both you and the computer chose " + playerchoiceStr + ".");

    //the following else if statements check all the win conditions
    //if any of these are true then increment the win score by 1 with ++ notation
    } else if (playerchoiceStr === "rock" && compchoiceStr === "scissors") {
        win++;
        
        //alert the user of the win
        alert("Wow!! You won!\nYou chose: " + playerchoiceStr + ".\nThe computer chose: " + compchoiceStr + ".");

    } else if (playerchoice === "scissors" && compchoiceStr === "paper") {
        win++;

        //alert the user of the win
        alert("Wow!! You won!\nYou chose: " + playerchoiceStr + ".\nThe computer chose: " + compchoiceStr + ".");

    } else if (playerchoice === "paper" && compchoiceStr === "rock") {
        win++;

        //alert the user of the win
        alert("Wow!! You won!\nYou chose: " + playerchoiceStr + ".\nThe computer chose: " + compchoiceStr + ".");

    //if you did not win, and it is not a tie, then it has to be a loss
    //so we increment the loss counter here
    } else {
        lost++;

        //alert the user of the loss
        alert("Oh no!! You lost!\nYou chose: " + playerchoiceStr + ".\nThe computer chose: " + compchoiceStr + ".");
    }

    //this will check if the user wants to play again and if not will update the wantstoplay variable
    wantstoplay = confirm("Would you like to play again?");

    //this will reset the playerchoice variable for the next game if they choose to play again
    playerchoice = "";
}