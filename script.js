function guessNumber(){
    const numberResult = (Math.floor(Math.random() * 10) + 1).toString(); //så att det blir random mellan 1 och 10
    let guess;

    while (guess !== numberResult) { //om gissning inte är resultatet av random
        guess = prompt('guess a number between 1 and 10;');

    if (guess === numberResult) {
        alert ('right number');
    } else if (guess < numberResult) {
        alert ('too low');
    } else if (guess > numberResult) {
        alert('too high');
    } else {
        alert('enter a valid number');
    }
}
}
