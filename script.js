function guessNumber(){
    const numberResult = (Math.floor(Math.random() * 10) + 1).toString(); //så att det blir random mellan 1 och 10
    let guess;

    while (guess !== numberResult) { //om gissning inte är resultatet av random
            guess = prompt('guess a number between 1 and 10;');

        if (guess === numberResult) {
            alert ('Well done! Right number!');
        } else if (guess < numberResult) {
            alert ('Too low, try again!');
        } else if (guess > numberResult) {
            alert('Too high, try again!');
        } else {
            alert('enter a valid number');
        }
    }
}
