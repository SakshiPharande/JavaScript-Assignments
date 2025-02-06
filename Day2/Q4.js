/**
What will be printed to the console?
*/

const testAsyncFunction = () => {
    return Promise.reject('Test static reject');
};
    
testAsyncFunction()
.then((res) => {
    console.log('Response in then block', res);
}).catch((err) => console.log('Error in catch block', err));

/**
Output:
Error in catch block Test static reject

Explaination:
=> const testAsyncFunction = () => { ... } defines a function that returns a promise.
=> return Promise.reject('Test static reject'); creates and returns a new promise that is already in the rejected state. 
=> The argument 'Test static reject' is the rejection reason
=> .then(...): This part is skipped because the promise failed, not succeeded.
=> .catch(...): This part runs because the promise failed. It receives the error message and prints "Error in catch block Test static reject".
*/