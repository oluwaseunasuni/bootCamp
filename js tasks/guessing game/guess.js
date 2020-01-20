//create secretNumber
var secretNumber = 24;

//asks user for guess
var stringGuess = prompt("Guess a number");
//converts the input from string to number
var guess = Number(stringGuess);

//checks if guess is right
if(guess === secretNumber) {
    alert("YOU GOT IT RITGHT");
}
//checks if guess is higher
else if(guess > secretNumber){
    alert("Too high. Guess again.");
}
else {
    alert("Too low. Guess again!");
}
