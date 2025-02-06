/**
Write a function that can stop execution of a function for the number of milliseconds
sent as an argument
Example:
const func = async () => {
    console.log(“Printing before”)
    //Call your function here eg. sleep(3000)
    console.log(“Printing after”)
}
*/



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const func = async () => {
    console.log("Printing before");
  
    // Multiplication table generation with delay
    const number = 5; 
    for (let i = 1; i <= 10; i++) {
      const result = number * i;
      console.log(`${number} x ${i} = ${result}`);
      await sleep(500); // Delay for 500 milliseconds (0.5 seconds) between each line
    }
  
    console.log("Printing after");
  }
  
  func();
  
  