// Create a secret number

var secretNumber = 4;

//Ask guess

var guess = Number(prompt("Guess a number"));

//Check if guess is right

if (guess === secretNumber){
    alert("You got it right");
}

//Otherwise, check if higher
else if (guess > secretNumber){
    alert("Too high, try again!");
}

//Otherwise, check if lower
else (guess < secretNumber){
    alert("Too low, guess again!");
}