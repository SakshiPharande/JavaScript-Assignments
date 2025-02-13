/*
Create a validation class similar to ‘yup’ and add validations for required, min and max for strings. 
Expose an isValid method that returns true or false based on the argument passed 
*/


class StringValidator {
    constructor() {
        this.validations = [];
    }

    required() {
        this.validations.push(value => typeof value === 'string' && value.trim().length > 0);
        return this;
    }

    min(length) {
        this.validations.push(value => typeof value === 'string' && value.length >= length);
        return this;
    }

    max(length) {
        this.validations.push(value => typeof value === 'string' && value.length <= length);
        return this;
    }

    isValid(value) {
        return this.validations.every(validation => validation(value));
    }
}

// Usage
const schema = new StringValidator().required().min(3).max(10);

console.log(schema.isValid("Hello"));  // true
console.log(schema.isValid("Hi"));     // false 
console.log(schema.isValid(""));       // false (empty)
console.log(schema.isValid("This is a long string")); // false
console.log(schema.isValid(123));      // false
