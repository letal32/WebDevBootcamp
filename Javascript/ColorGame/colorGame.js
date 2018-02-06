var h1 = document.querySelector("h1");
var squaresHard = document.querySelectorAll(".squared");
var squaresEasy = document.querySelectorAll(".easyLevel");
var squares = squaresHard;
var state = document.querySelector("#state");
var header = document.querySelector(".header");
var newColorsButton = document.querySelector("#newColorsButton");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var colorToGuess;

assignColors();


for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
        if (this.style.backgroundColor === colorToGuess){
            setSquaresColor(colorToGuess);
            header.style.backgroundColor = colorToGuess;
            state.textContent = "Correct!";
            newColorsButton.textContent = "Play Again?";
        } else {
            state.textContent = "Try Again!";
            this.classList.remove("visible");
            this.classList.add("hidden");
        }
    });
}

newColorsButton.addEventListener("click", function(){
    assignColors();

    this.textContent = "NEW COLORS";
    header.removeAttribute("style");
    h1.textContent = colorToGuess.toUpperCase();
    state.textContent = "";
});

easyButton.addEventListener("click", function(){
    assignColors();

    squares = squaresEasy;
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    header.removeAttribute("style");

    for (var i=1; i < squaresHard.length; i+=2){
        squaresHard[i].classList.remove("visible");
        squaresHard[i].classList.add("hidden");
    }

    
});

hardButton.addEventListener("click", function(){
    squares = squaresHard;
    header.removeAttribute("style");
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    
    assignColors();
});

function setSquaresColor(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].classList.add("visible");
        squares[i].style.backgroundColor = color;
    }
}

function assignColors(){

    colorToGuess = generateRandomRGB(); 
    var colorToGuessPosition = randomIntFromInterval(0, squares.length-1);

    for (var i = 0; i < squares.length; i++){
        if (i === colorToGuessPosition){
            squares[i].style.backgroundColor = colorToGuess;
        } else {
            squares[i].style.backgroundColor = generateRandomRGB();
        }

        squares[i].classList.add("visible");
    }

    h1.textContent = colorToGuess.toUpperCase();
}

function generateRandomRGB(){
    var firstComp = randomIntFromInterval(0,255);
    var secondComp = randomIntFromInterval(0,255);
    var thirdComp = randomIntFromInterval(0,255);

    return "rgb(" + firstComp + ", " + secondComp + ", " + thirdComp + ")"; 
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

