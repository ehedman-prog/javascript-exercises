// EXERCISE 1: Guess the random number
// Create a function guessNumberGame that generates a random number between 1 and 10.
// The function should repeatedly prompt the user to guess the number until the correct number is guessed.
// Use a while loop to keep asking the user for input until they guess correctly.
// Provide feedback if the guess is too high or too low.

function guessNumberGame() {
    const target = Math.floor(Math.random() * 10)+1;
    let guess = null;
    let instruction = ("The number is between 1 and 10. Make a guess:")

    while (guess !== target) {
        //console.log(`Target: ${target}. Guess: ${guess}`);
        guess = parseFloat(prompt(instruction));

        if (guess < target) {
            instruction = `The number is higher than ${guess}. The number is between 1 and 10. Make a guess:`
            } else {
              instruction = `The number is lower than ${guess}. The number is between 1 and 10. Make a guess:`
            }
            

    }
    console.log(`You guessed it! The number was ${target}. Congrats you win!`)
}

guessNumberGame();
