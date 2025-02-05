let arr = [1, 2, 3, 4, 5];
let jsonArr = JSON.stringify(arr);

console.log(jsonArr); // Output: "[1,2,3,4,5]"
console.log(typeof jsonArr); // "string"


let person = {
    name: "Sakshi",
    age: 23,
    skills: ["JavaScript", "React", "Python"],
    address: {
      city: "Pune",
      country: "India"
    }
  };
  
  let jsonPerson = JSON.stringify(person);
  console.log(jsonPerson);
  console.log(typeof jsonPerson)
  

console.log(JSON.stringify(42));           // "42"
console.log(JSON.stringify("hello"));      // "\"hello\""
console.log(JSON.stringify(null));         // "null"
console.log(JSON.stringify(undefined));    // undefined
console.log(JSON.stringify({ a: undefined, b: "test" })); // "{"b":"test"}"
console.log(JSON.stringify([1, undefined, 3])); // "[1,null,3]"
