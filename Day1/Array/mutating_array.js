/**
What makes a method mutating or non mutating in Javascript? 
Find out whether each of the following methods are mutating or non-mutating. 
How can you verify this?:
○ push 
○ pop 
○ filter 
○ find 
○ sort 
○ map
*/


/**
Ans:
Mutating vs. Non-Mutating Methods in JavaScript
A mutating method modifies the original array, while a non-mutating method returns a new array without altering the original.
*/


let arr = [3, 1, 4, 2];

console.log("Before:", arr);

// Testing push (Mutating)
arr.push(5);
console.log("After push:", arr); // Array changes

// Testing pop (Mutating)
arr.pop();
console.log("After pop:", arr); // Array changes

// Testing filter (Non-Mutating)
let filteredArr = arr.filter(num => num > 2);
console.log("After filter:", arr);  // Original array remains unchanged
console.log("Filtered array:", filteredArr);  // New array

// Testing find (Non-Mutating)
let found = arr.find(num => num === 3);
console.log("After find:", arr);  // Original array remains unchanged
console.log("Found element:", found);

// Testing sort (Mutating)
arr.sort((a, b) => a - b);
console.log("After sort:", arr);  // Original array is modified

// Testing map (Non-Mutating)
let mappedArr = arr.map(num => num * 2);
console.log("After map:", arr);  // Original array remains unchanged
console.log("Mapped array:", mappedArr);  // New array
