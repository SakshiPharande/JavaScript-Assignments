/**
Write a function filterObj that will filter out all the keys of a flat object that have objects or 
arrays using Object.keys and Object.entries. Example: 
let obj = { 
    a:”Apple”, 
    b:[“Basketball”,”Baseball”], 
    c: { call: “cellphone”}, 
    d: “Dog” 
} 
filterObject(obj) //This should return {a:”Apple”, d:”Dog”}
*/

let obj = 
{ 
    a:"Apple", 
    b:["Basketball","Baseball"], 
    c: { call: "cellphone"}, 
    d: "Dog" 
} 

function filterObj(obj) {
    return Object.keys(obj)
        .filter(key => typeof obj[key] !== "object") // Keep only primitive values
        .reduce((acc, key) => {
            acc[key] = obj[key]; 
            return acc;
        }, {});
}

console.log(filterObj(obj));