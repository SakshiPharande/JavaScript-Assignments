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