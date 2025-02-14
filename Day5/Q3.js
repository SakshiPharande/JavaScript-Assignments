/*
Quetion:
Share a minimum four differentiation between regular function and arrow functions with one examples

Answer:
Syntax

Normal Function: Uses the function keyword.
Arrow Function: Uses => (fat arrow).
this Binding

Normal Function: this refers to the object that called the function (dynamic binding).
Arrow Function: this is lexically inherited from the surrounding scope.
Arguments Object

Normal Function: Has access to the arguments object.
Arrow Function: Does not have its own arguments object.
Usage as Methods

Normal Function: Works well as an object method because this refers to the object.
Arrow Function: Not suitable for object methods because this refers to the outer scope.
Hoisting

Normal Function: Can be hoisted (used before declaration).
Arrow Function: Cannot be hoisted.
*/

const user = {
    name: "Sakshi",
    greetNormal: function() {
        console.log("Hello, " + this.name); 
    },
    greetArrow: () => {
        console.log("Hello, " + this.name); 
    }
};

user.greetNormal(); // Output: Hello, Sakshi
user.greetArrow();  // Output: Hello, undefined
