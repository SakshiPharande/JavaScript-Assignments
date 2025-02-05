/**
What happens if you pass a regular/invalid JSON string to JSON.parse? 
What will happen if such an invalid function runs in the program? 
Will other parts of the code execute correctly after that? 
*/

let invalidJson = "{ name: 'Sakshi', age: 23 }"; // Invalid JSON

try {
  let obj = JSON.parse(invalidJson); // Throws an error
} catch (error) {
  console.log("Caught error:", error.message); // Error handled
}

console.log("This line will execute!"); // Program continues
