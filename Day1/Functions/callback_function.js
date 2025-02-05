/**
 Take a function that accepts a function as a parameter (also known as callback function). function test(callback){ 
callback(); 
} 
function callbackFunc(){ 
console.log(“Calling the callback function”) 
return 5; 
} 
Explore the following cases - what is printed in the console, and what gets returned: ○ test(callbackFunc) 
○ test(callbackFunc()) 
○ test(() => callbackFunc()) 
○ What happens when you return callback() from the test function? ○ What happens when you return callback from the test function?

*/


function test(callback) { 
    return callback(); 
}

function callbackFunc() { 
    console.log("Calling the callback function");
    return 5; 
}

test(callbackFunc);    
// output : Calling the callback function

// test(callbackFunc());   
/** 
OUTPUT: 
Calling the callback function
TypeError: callback is not a function 

Explaination:
callbackFunc() executes before test() is even called, printing "Calling the callback function".
callbackFunc() returns 5, which is passed into test().
test(5) results in 5() → Error: 5 is not a function.
*/

test(() => callbackFunc());
/**
OUTPUT:
Calling the callback function

Explaination:
test() calls callback(), which executes callbackFunc().
callbackFunc() prints "Calling the callback function".
The return value of callbackFunc() (5) is returned by test().
*/


function test(callback) { 
    return callback(); 
}

console.log(test(callbackFunc));

/**
OUTPUT:
Calling the callback function
5

Explaination:
The function test() calls callbackFunc(), which logs "Calling the callback function".
callbackFunc() returns 5, which is returned by test() and printed.
 */



function test(callback) { 
    return callback; 
}
console.log(test(callbackFunc));
/**
 OUTPUT:
 [Function: callbackFunc]

 Explain:
 Since test() returns the function reference, console.log(test(callbackFunc)) prints callbackFunc itself, without executing it.
 */

