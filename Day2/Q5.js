/*
What will be printed to the console?
*/

const testAsyncFunction = () => {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve('Test Resolve');
      } else {
        reject('Test Reject');
      }
    }).catch((err) => {
      console.log('Error caught in testAsyncFunction', err);
      throw new Error('Forced error');
    });
  };
  
  testAsyncFunction()
    .then((res) => {
      console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));

/*
Output:

When random value > 0.5(Resolve):
--> Response in then block:  Test Resolve

Explaination:
The resolve path is taken.
The .then block is executed: Response in then block: Test Resolve is printed.
The second .catch block is skipped.



when randome value < 0.5(Reject):
--> Error caught in testAsyncFunction Test Reject
    Error in catch block:  Error: Forced error
    at /home/josh/Javascript/Day2/Q5.js:14:13

Explaination:
The reject path is taken with 'Test Reject'.
The first .catch block catches the rejection and prints Error caught in testAsyncFunction Test Reject.
Then, throw new Error('Forced error'); re-throws a new error. The original rejection ('Test Reject') is effectively replaced with the new "Forced error" rejection.
.then block is skipped (because of the rejection).
The second .catch block catches the "Forced error" rejection and prints: Error in catch block: Error: Forced error
*/
  