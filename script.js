//Start server side options
var playerchoice = "";
var playerchoiceStr;

alert("Would you like to play a game")

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
console.log(compchoiceStr);