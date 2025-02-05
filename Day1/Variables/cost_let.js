// Arrays 

let arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Modifying elements
arr1[0] = 10;
arr2[0] = 20;

console.log(arr1); // [10, 2, 3]
console.log(arr2); // [20, 5, 6]

// Adding elements
arr1.push(4);
arr2.push(7);

console.log(arr1); // [10, 2, 3, 4]
console.log(arr2); // [20, 5, 6, 7]

// Reassigning the whole array
arr1 = [100, 200]; // Works
arr2 = [300, 400]; // Error: Assignment to constant variable.

// const does not allow reassignment, but allows modification of contents.
// let allows both modification and reassignment.




// Objects
let obj1 = { name: "Sakshi", age: 23 };
const obj2 = { name: "Ashiya", age: 22 };

// Modifying properties
obj1.age = 26;
obj2.age = 31;  // Allowed because properties of a const object can be modified

console.log(obj1); // { name: "Sakshi", age: 26 }
console.log(obj2); // { name: "Ashiya", age: 31 }

// Adding new properties
obj1.city = "Pune";
obj2.city = "Mumbai";

console.log(obj1); // { name: "Sakshi", age: 26, city: "Pune" }
console.log(obj2); // { name: "Ashiya", age: 31, city: "Mumbai" }

// Deleting properties
delete obj1.name;
delete obj2.name;

console.log(obj1); // { age: 26, city: "Pune" }
console.log(obj2); // { age: 31, city: "Mumbai" }

// Reassigning the object
obj1 = { name: "Tom" }; // Works
obj2 = { name: "Jerry" };   // Error: Assignment to constant variable.

console.log(obj1); // { name: "Tom" }
console.log(obj2); //  This will not execute due to the error above
