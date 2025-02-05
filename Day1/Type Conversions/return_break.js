function createArray() {
    let arraySize = 25;
    let numbersArray = [];

    for (let i = 1; i <= arraySize; i++) {
        if (i === 10) {
            return numbersArray; // This will exit the function, and return the array
        }
        numbersArray.push(i);
    }
    return numbersArray; // This will be skipped if the function exits early
}
