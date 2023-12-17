// **Question 2: Find the Maximum Number in an Array**

// Write a function `findMax` that takes an array of numbers as input and returns the maximum number from the array.

// **Example:**
// ```javascript
// const input = [3, 7, 1, 9, 5];
// const output = findMax(input);
// console.log(output); // 9

// sol:

// 1)

// function findMax(input){
//  let result=input.reduce((acc,curr)=>{
//     if(curr>acc){
//         acc=curr
//     }
//     return acc
//  },-Infinity)
//  return result
//    }
//    const input = [3, 7, 1, 9, 5];
// const output = findMax(input);
// console.log(output); 

//    or

// 2)

// function findMax(input){
//     const result=input.reduce((acc,curr)=>{
//         return curr>acc?curr:acc
//     },-Infinity)
//     return result
// }

// const input = [3, 7, 1, 9, 5];
// const output = findMax(input);
// console.log(output); 
 
// 3)

function findMax(input){
   let max=-Infinity
   for(let i=0;i<input.length;i++){
    if(input[i]>max){
        max=input[i]
    }
   }
   return max
}

const input = [3, 7, 1, 9, 5];
const output = findMax(input);
console.log(output); 


