function guessNumber(){
    const numberResult = Math.floor(Math.random() * 10) + 1; //så att det blir random mellan 1 och 10

    while //

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
// call function