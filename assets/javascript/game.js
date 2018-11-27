var wordBank = ["yoshi", "mario", "luigi", "peach", "toad", "bowser", "wario", "waluigi"];
var currentWord = ""; // Stores the word we want the player to guess
var answerArray = []; // Stores the answer but begins with _
var alreadyGuessedArr = []; // Space to store letter guesses not matched correctly
var wins = 0;
var x = document.getElementById("correct-audio");
var y = document.getElementById("wrong-audio");
var won = document.getElementById("won-audio");
var lost = document.getElementById("lost-audio");

// AUDIO
function playAudio() {
    x.play();
    y.play();
    won.play();
    lost.play();
}
// START GAME FUNCTION
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

// resetGame() is called in HTML script
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
    // Increase win count by 1
    wins++;
    // Print new win total in HTML
    document.getElementById("win-counter").innerHTML = wins;
}
function lostGame() {
    console.log("GAME OVER");
    $("#container").css("display", "none");
    $("#game-lost").css("display", "block");
    lost.play();
}

// ON PAGE LOAD

window.onload = startup;

var i = 0;
var numberGuesses = 12;
console.log(numberGuesses);
document.getElementById("guesses-left").innerHTML = numberGuesses;

// USER SELECTS A LETTER GUESS

document.onkeyup = function (event) {

    numberGuesses -= 1;
    document.getElementById("guesses-left").innerHTML = numberGuesses;
    console.log(numberGuesses);
    var letter = event.key;
    // var allGuessedLetters = [];
    console.log(letter);

    var found = false; // A variable name that I chose with a boolean

    ////// PREVENT REPEAT GUESSES // ALLOW ONLY ALPHABETICAL KEY PRESSES AS GUESSES ///////

    // if (allGuessedLetters.length) {

    //     for (var i = 0; i < allGuessedLetters.length; i++) {
    //         if (allGuessedLetters[i] === letter) {
    //             console.log("TRY AGAIN");
    //         } else {
    //             console.log("WOOHOO");
    //         }
    //     }
    // } else {
    //     allGuessedLetters.push(letter);
    // }
    // console.log(allGuessedLetters);

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

        // } else {
        //     alert("This letter has already been guessed- try another!");
    }

    // WON: User guessed the full currentWord
    if ((currentWord == answerArray.join(""))) { 
        
        console.log("You have completed " + wins + " levels");
        // Delay wonGame function slightly, so that user can read full word
        setTimeout(wonGame, 800);

    // LOST: User did not complete currentWord within 12 guesses
    } else if (numberGuesses === 0) {
       
       console.log("You need to play more nintendo.")
        // Delay lostGame function slightly
        setTimeout(lostGame, 800);
    }

    // on page load, user types a key, check if it's a new letter, or a repeated letter
    // then, check if the new letter is part of the currentWord
    // if new & not repeated, print to alreadyGuessedArray
    // if repeated, alert user 
   
}