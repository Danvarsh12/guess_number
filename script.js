const randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;
console.log(randomNumber);

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guess').value);
    guesses++;

    let resultMessage = document.getElementById('result');
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = "Please enter a valid number between 1 and 100.";
    } else {
        if (userGuess === randomNumber) {
            resultMessage.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${guesses} guesses.`;
            disableInput();
        } else if (userGuess < randomNumber) {
            resultMessage.textContent = "Too low! Try guessing higher.";
        } else {
            resultMessage.textContent = "Too high! Try guessing lower.";
        }
    }
}

function disableInput() {
    document.getElementById('guess').disabled = true;
    document.querySelector('button').disabled = true;
}
