//Start server side options
var playerchoice;

alert("Would you like to play a game")

playerchoice = prompt("Rock, Paper, Scissors.\nType R, P, S to play.")

//Computer side
var compchoice;

compchoice = Math.floor(Math.random() * (3))
console.log(compchoice)