let favoriteNumber = 24
let userGuess = null

while (userGuess !== favoriteNumber) {
    userGuess = parseInt(prompt("Guess my favorite number:"));
    if (userGuess > favoriteNumber) {
        alert("Your guess is too high! Try again.");
    } else if (userGuess < favoriteNumber) {
        alert("Your guess is too low! Try again.");
    } else {
        alert("Congratulations! You guessed it right!");
    }
}










