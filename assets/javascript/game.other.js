document.onkeyup = function (event) {

    // Game properties

    var game = {
        wordBank: ["yoshi", "mario", "luigi", "peach", "toad", "bowser", "wario", "waluigi"],
        wins: 0,
        guessesLeft: 12, // Counter for guesses remaining
        currentWord: "",
        userGuess: "",
        remainingLetters: "",
        currentWordPlaceHolderArr: [],
        alreadyGuessed: []
    }

    // Select random word
    var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    var wordPlace = document.getElementById("word"); 
    wordPlace.innerHTML = " _ ".repeat(currentWord.length);

    

    // Characters of Current Word
    var eachChar = [];
    var hiddenChar = [];
    for (var i = 0; i < currentWord.length; i++) {
        eachChar.push(currentWord.charAt(i));
        hiddenChar.push(" _ ");
    }

    remainingLetters = currentWord.length;

    // Show the Current Word as Hidden
    var wordPlace = document.getElementById("word"); 
    wordPlace.innerHTML = hiddenChar;

    // Words Guessed
    document.onkeyup = function (event) {
        var letter = event.key;
        letter = letter.toUpperCase();
        document.getElementById("userGuess").append(letter + " ");
    };
    // Make a counter for guesses remaining
    guessesLeft--;
    document.getElementById("guessesLeft").innerHTML = "Number of remaining guesses: " + guessesLeft;
    
    // Losing Function
    if(guessesLeft == 0) {
        document.getElementById("userGuess").innerHTML = "Letters Already Guessed: ";//clear
        guessesLeft = 12;//counter clear
        hiddenChar = [];//clear
        eachChar = [];//clear
        // Select random word for next round
        currentWord = wordBank[Math.floor(Math.random() * (wordBank.length))];
        alert(currentWord);
        for(var i = 0; i < currentWord.length; i++){
            eachChar.push(currentWord.charAt(i));
            hiddenChar.push(" _ ");
        };
        wordPlace.innerHTML = hiddenChar;  
    };
   
    // Replace the correct guess in hidden
    var letter = event.key;
    var letterIndex = eachChar.indexOf(letter);
    hiddenChar[letterIndex] = eachChar[letterIndex];
    wordPlace.innerHTML = hiddenChar;

    if (!(hiddenChar.includes(" _ "))) {
        document.getElementById("userGuess").innerHTML = "Letters Already Guessed: ";//clear
        keyPressCount = 10;//counter clear
        hiddenChar = [];//clear
        eachChar = [];//clear
        // Set win count
        winTimes++;
        document.getElementById("wins").innerHTML = "Wins: " + winTimes;
      
        // Select random word for next round
        currentWord = wordBank[Math.floor(Math.random() * (wordBank.length))];
        alert(currentWord);
        for (var i = 0; i < currentWord.length; i++) {
            eachChar.push(currentWord.charAt(i));
            hiddenChar.push(" _ ");
        };
        wordPlace.innerHTML = hiddenChar;
       
    };


};

    




