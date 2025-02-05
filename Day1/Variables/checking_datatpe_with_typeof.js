console.log(42, " - ", typeof 42);           // 42 - number
console.log("hello", " - ", typeof "hello");  // hello - string
console.log(true, " - ", typeof true);        // true - boolean
console.log({}, " - ", typeof {});            // [object Object] - object
console.log([], " - ", typeof []);            // [] - object (Arrays are a type of object)
console.log(null, " - ", typeof null);        // null - object (A known JavaScript quirk)
console.log(NaN, " - ", typeof NaN);          // NaN - number (Even though it means "Not a Number")
console.log(function(){}, " - ", typeof function(){}); // function (){} - function
console.log(undefined, " - ", typeof undefined); // undefined - undefined
