//create secretNumber
var secretNumber = 24;

//ask user for guess
var guess = prompt("Guess a number");

//check if number is right

if (Number(guess) === secretNumber) { // Number(guess) is used to convert the user's input to a number before comparison with the secret number occurs
    alert("YOU GOT IT RIGHT");
}

else {
    alert("ooopps! \nTry again.");
}
//return prompt();