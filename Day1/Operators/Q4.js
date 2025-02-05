let invalidJson = "{ name: 'Sakshi', age: 23 }"; // Invalid JSON

try {
  let obj = JSON.parse(invalidJson); // Throws an error
} catch (error) {
  console.log("Caught error:", error.message); // Error handled
}

console.log("This line will execute!"); // Program continues
