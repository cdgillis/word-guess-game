var wordBank = ["yoshi", "mario", "luigi", "peach", "toad", "bowser", "wario", "waluigi"];
var currentWord = ""; // Stores the word we want the player to guess
var answerArray = []; // Stores the answer but begins with _
var alreadyGuessedArr = []; // Space to store letter guesses not matched correctly
var wins = 0;

var x = document.getElementById("win-audio"); 

function playAudio() { 
    x.play(); 
} 

function pauseAudio() { 
    x.pause(); 
}

window.onload = function startup() {

    $("#game-won").css("display", "none");
    // Select random word
    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
    }

    document.getElementById("answer").innerHTML = answerArray.join(" ")
    console.log(currentWord);

}

var i = 0;
var numberGuesses = document.getElementById("guesses-left").innerHTML = 12;

// Words Guessed
document.onkeyup = function (event) {

    /*// Process user's letter input
    for (var i = 0; i < currentWord.length; i++) {
        eachChar.push(currentWord.charAt(i));
        hiddenChar.push(" _ ");
    }*/

    var letter = event.key;
    console.log(letter);

    var found = false; //I made this variable
    // Set number of guesses
    

    //Look for letter in word
    for (i = 0; i < currentWord.length; i++) {
        if (currentWord[i] == letter) {
            // Found the letter
            found = true;
            answerArray[i] = letter;
            document.getElementById("answer").innerHTML = answerArray.join(" ");
        }
        numberGuesses--;
    }
    // Finished checking the word for the letter
    if (!found) {
        alreadyGuessedArr.push(letter);
        document.getElementById("user-guess").innerHTML = alreadyGuessedArr.join(" ");
        numberGuesses--;
    }
   
}
// Update the game for remaining unknowns
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