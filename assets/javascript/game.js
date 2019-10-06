let fallWords = ["harvest", "cider", "corn", "leaf", "amber"];

let rightWord = [];
let wins = 0;
let losses = 0;
let remaining = 9;
let wrongWord = [];
let computerCurrWord
let start = true;

let currentWord = document.getElementById("current-word");
let winsText = document.getElementById("wins-text");
let lossesText = document.getElementById("losses-text");
let guessRemaining = document.getElementById("guesses-remaining");
let wrongLetters = document.getElementById("wrong-letters");
let docUnderScore = document.getElementById("current-word");

function reset () {
    remaining = 9;
    wrongWord = [];
    underScore = [];
    computerCurrWord = fallWords[Math.floor(Math.random() * fallWords.length)].toLowerCase();
        console.log("computer: " + computerCurrWord);
}

function generateUnderscore () {
    for (let i = 0; i < computerCurrWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
}

reset()
generateUnderscore()

currentWord.textContent = underScore.join(" ");

document.onkeyup = function(event) {
    let userGuess = event.key;
    console.log("user: " + userGuess);
    if (computerCurrWord.indexOf(userGuess) > -1) {
        rightWord.push(userGuess);
        underScore[computerCurrWord.indexOf(userGuess)] = userGuess;
    } else {
        wrongWord.push(userGuess);
        remaining--;
            if (remaining < 1) {
                    losses++;
                    reset()
                    generateUnderscore()
                }
    }

    if (underScore.join("") == computerCurrWord) {
        wins++;
        reset()
        generateUnderscore()
    }

    winsText.textContent = `Wins: ${wins}`;
    lossesText.textContent = `Losses: ${losses}`;
    currentWord.textContent = underScore.join(" ");
    guessRemaining.textContent = `Number of Guesses Remaining: ${remaining}`;
    wrongLetters.textContent = `Letters Already Guessed: ${wrongWord.join(" ")}`;
}