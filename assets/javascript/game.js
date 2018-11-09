var wordBank = ["yoshi", "mario", "luigi", "peach", "toad", "bowser", "wario", "waluigi"];
var currentWord = ""; // Stores the word we want the player to guess
var userGuess = "";
var remainingLetters = ""; // GLOBAL???
var answerArray = []; // Stores the answer but begins with _
var alreadyGuessedArr = [];
var wins = 0;

window.onload = function startup() {

    // Select random word
    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
    }

    document.getElementById("answer").innerHTML = answerArray.join(" ")
    console.log(currentWord);

}

var i = 0;

// Words Guessed
document.onkeyup = function (event) {


    /*// Process user's letter input
    for (var i = 0; i < currentWord.length; i++) {

        eachChar.push(currentWord.charAt(i));
        hiddenChar.push(" _ ");

    }*/
    var letter = event.key;
    console.log(letter);
    //letter = letter.toUpperCase();


    //var i = 0
    for (i = 0; i < currentWord.length; i++) {
        if (currentWord[i] == letter) {
            answerArray[i] = letter;
            document.getElementById("answer").innerHTML = answerArray.join(" ");
        }
    }

    /*for (i = 0; i < currentWord.length; i++) {
        if (currentWord[i] !== letter) {
            document.getElementById("userGuess").append(letter + " ");
        }
    }*/
}

/*// Set number of guesses
    numberGuesses = document.getElementById("guessesLeft").innerHTML = 12;
    
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