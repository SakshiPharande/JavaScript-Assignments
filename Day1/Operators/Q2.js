let arr = [1,2,3,4,5]

console.log(arr[8])
console.log(arr[-3])
/**

OUTPUT
undefined

Explanation:
In JavaScript, if you try to access an index beyond the length of a array, it does not throw an error.
Instead, it returns undefined.

JavaScript does not support negative indexing for strings like Python.
arr[-3] does not count from the end. Instead, it treats -3 as an invalid index, returning undefined.
*/
