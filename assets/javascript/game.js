var wordBank = ["yoshi", "mario", "luigi", "peach", "toad", "bowser", "wario", "waluigi"];
var currentWord = ""; // Stores the word we want the player to guess
var answerArray = []; // Stores the answer but begins with _
var alreadyGuessedArr = []; // Space to store letter guesses not matched correctly
var wins = 0;
var x = document.getElementById("correct-audio");
var y = document.getElementById("wrong-audio");
var won = document.getElementById("won-audio");
var lost = document.getElementById("lost-audio");
// var vid = document.getElementById("myVideo"); 

function playAudio() {
    x.play();
    y.play();
    won.play();
    lost.play();
}

function startup() {

    $("#game-won").css("display", "none"); //Need to create an on.click function with a button
    $("#game-lost").css("display", "none");
    $("#container").css("display", "block");
    // Select random word
    answerArray = [];
    currentWord = "";
    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
    }

    document.getElementById("answer").innerHTML = answerArray.join(" ")
    console.log(currentWord);
}

function resetGame() {
    numberGuesses = 12;
    document.getElementById("guesses-left").innerHTML = numberGuesses;
    answerArray = [];
    alreadyGuessedArr = [];
    document.getElementById("user-guess").innerHTML = alreadyGuessedArr;
    startup();
}

function wonGame() {
    console.log("Level Complete!");
    $("#container").css("display", "none");
    $("#game-won").css("display", "block");
    won.play();
}

function lostGame() {
    console.log("GAME OVER");
    $("#container").css("display", "none");
    $("#game-lost").css("display", "block");
    lost.play();
}

window.onload = startup;
var i = 0;
var numberGuesses = 12;
console.log(numberGuesses);
document.getElementById("guesses-left").innerHTML = numberGuesses;
// Words Guessed
document.onkeyup = function (event) {
    numberGuesses -= 1;
    document.getElementById("guesses-left").innerHTML = numberGuesses;
    console.log(numberGuesses);
    var letter = event.key;
    console.log(letter);

    var found = false; //I made this variable
    // Set number of guesses

    //Look for letter in word
    for (i = 0; i < currentWord.length; i++) {
        if (currentWord[i] == letter) {
            // Found the letter
            x.play();
            found = true;
            answerArray[i] = letter;
            document.getElementById("answer").innerHTML = answerArray.join(" ");
            // numberGuesses--;
        }

    }
    // Finished checking the word for the letter
    if (!found) {
        y.play();
        alreadyGuessedArr.push(letter);
        document.getElementById("user-guess").innerHTML = alreadyGuessedArr.join(" ");
        // numberGuesses--;

    }
    if ((numberGuesses > 0) && (currentWord == answerArray.join(""))) {
        wins++;
        console.log("You have completed " + wins + " levels");
        document.getElementById("win-counter").innerHTML = wins;
        wonGame();
        
    } else if (numberGuesses == 0){ 
        lostGame();
    }
   
}

// $('#resetBtn').click(function(){
//     //Some code
// });

/*// Update the game for remaining unknowns
var remaining_letters = answerArray.length;
// recount the remaining letters
for (i = 0; i < answerArray.length; i++) {
    if (answerArray[i] !== '_') {
        remaining_letters -= 1;
    }
}

// if no remaining letters, hurray, you won
if (remaining_letters == 0) {
    playAudio();
    $("#game-won").css("display");
}
*/

/*
    
    // Make a counter for guesses remaining
    numberGuesses--;
    document.getElementById("guessesLeft").innerHTML = "Number of remaining guesses: " + numberGuesses;

    // Losing Function
    if (numberGuesses == 0) {
        document.getElementById("userGuess").innerHTML = "Letters Already Guessed: "; //clear
        numberGuesses = 12; //counter clear
        hiddenChar = []; //clear
        eachChar = []; //clear
        // Select random word for next round
        currentWord = wordBank[Math.floor(Math.random() * (wordBank.length))];
        alert(currentWord);
        for (var i = 0; i < currentWord.length; i++) {
            eachChar.push(currentWord.charAt(i));
            hiddenChar.push(" _ ");
        };
        wordPlace.innerHTML = hiddenChar;
    };
};*/