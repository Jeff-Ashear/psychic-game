// array stores possible letters
let lttrArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
let rando = 0
let wins = 0
let losses = 0
let guessesLeft = 0
let lettersGuessed = []

let gameStart = function() {
    rando = Math.ceil(Math.random() * 25); 
    guessesLeft = 9
    lettersGuessed = []
    
    document.getElementById("wins").innerHTML = "Wins: " + wins
    document.getElementById("losses").innerHTML = "Losses: " + losses
    document.getElementById("guessesLeft").innerHTML = "Guesses Remaining: " + guessesLeft
    document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + lettersGuessed
}

gameStart();

let gamePlay = function() {
    document.onkeyup = function(event) {
        if (guessesLeft > 1) {
            let userGuess = event.key
            
            lettersGuessed.push(userGuess)
            document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + lettersGuessed + " "
            
            if (userGuess === lttrArray[rando]) {
                alert("You Won!")
                wins = wins + 1
                gameStart()
            } else {
                guessesLeft = guessesLeft - 1
                document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft
            }
        } else {
            alert("You Lost!")
            losses = losses + 1
            gameStart()
        }
    }
}

    gamePlay()
