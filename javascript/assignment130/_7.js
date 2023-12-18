// **Question 6: Merge Two Sorted Arrays**

// Write a function `mergeSortedArrays` that takes two sorted arrays as input and merges them into a single sorted array.

// **Example:**
// ```javascript
// const inputArray1 = [1, 3, 5];
// const inputArray2 = [2, 4, 6];
// const output = mergeSortedArrays(inputArray1, inputArray2);
// console.log(output); // [1, 2, 3, 4, 5, 6]

function mergeSortedArrays(inputArray1, inputArray2){
  
  return inputArray1.concat(inputArray2).sort((a,b)=>{
       return a-b
  })
              
}
const inputArray1 = [1, 3, 5];
const inputArray2 = [2, 4, 6];
const output = mergeSortedArrays(inputArray1, inputArray2);
console.log(output); 
