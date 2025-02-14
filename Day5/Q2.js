/*
 Implement a Fibonacci sequence generator using a generator function in JavaScript. 
*/

function* fibonacciGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];  // Swapping values for next Fibonacci number
    }
}

// Usage
const fibGen = fibonacciGenerator();
console.log(fibGen.next().value);  // 0
console.log(fibGen.next().value);  // 1
console.log(fibGen.next().value);  // 1
console.log(fibGen.next().value);  // 2
console.log(fibGen.next().value);  // 3
console.log(fibGen.next().value);  // 5
console.log(fibGen.next().value);  // 8
