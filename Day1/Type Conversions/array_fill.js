/**
Declare a variable let arraySize = 25;. 
Using a for loop, add numbers from one onwards into an array till the arraySize is reached. 
*/

let arraySize = 25;
let numbersArray = [];

for (let i = 1; i <= arraySize; i++) {
    numbersArray.push(i);
}

console.log(numbersArray);
