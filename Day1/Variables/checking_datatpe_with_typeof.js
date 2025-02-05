/**
Use the typeof operator to find the types of different variables. 
Specially note what t typeof operator returns for arrays, null values and NaN. 
How can you find if a variable  an array or NaN besides typeof? 

*/

console.log(42, " - ", typeof 42);           // 42 - number
console.log("hello", " - ", typeof "hello");  // hello - string
console.log(true, " - ", typeof true);        // true - boolean
console.log({}, " - ", typeof {});            // [object Object] - object
console.log([], " - ", typeof []);            // [] - object (Arrays are a type of object)
console.log(null, " - ", typeof null);        // null - object (A known JavaScript quirk)
console.log(NaN, " - ", typeof NaN);          // NaN - number (Even though it means "Not a Number")
console.log(function(){}, " - ", typeof function(){}); // function (){} - function
console.log(undefined, " - ", typeof undefined); // undefined - undefined
