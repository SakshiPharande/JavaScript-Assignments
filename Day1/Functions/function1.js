/**

1 ) What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break?
-- > it will return that value and stop function immediately 

2) Can we return a value from inside a loop?
--> Yes, but it exits the loop and function immediately.

3) What happens when return is used in a switch case?
--> The function exits immediately after hitting return

4) Can you use return instead of break in a loop
-->  No, return exits the function, while break only stops the loop.
**/

// for
function findFirstEvenNumber(arr) {
    for (let num of arr) {
        if (num % 2 === 0) {
            return num; // Exits the function immediately when an even number is found
        }
    }
    return "No even number found"; // Runs only if no even number is found
}

console.log(findFirstEvenNumber([1, 3, 7, 8, 11])); // Output: 8
console.log(findFirstEvenNumber([1, 3, 7]));        // Output: "No even number found"


// while
function getFirstEven(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 === 0) {
            return arr[i]; // Exits the function immediately
        }
        i++;
    }
    return "No even number found";
}

console.log(getFirstEven([1, 5, 9, 10, 15])); // Output: 10
console.log(getFirstEven([1, 3, 5]));        // Output: "No even number found"


// switch
function getCategory(age) {
    switch (true) {
        case (age <= 12):
            return "Child"; // Function exits here for age <= 12
        case (age >= 13 && age <= 18):
            return "Teen";  // Function exits here for age 13-18
        default:
            return "Adult"; // Function exits here for all other cases
    }
    console.log("This will never run"); // Unreachable code
}

console.log(getCategory(10)); // Output: "Child"
console.log(getCategory(15)); // Output: "Teen"
console.log(getCategory(25)); // Output: "Adult"



// can we written inside if-block : YES
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    }
    return "Zero"; // Runs only if num is 0
}

console.log(checkNumber(10));  // Output: "Positive"
console.log(checkNumber(-5));  // Output: "Negative"
console.log(checkNumber(0));   // Output: "Zero"
