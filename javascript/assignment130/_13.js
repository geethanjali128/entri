// 13. Write a function `findMin` that takes an array of numbers as input and returns the minimum number in the array.

//    **Example:**
//    ```javascript
//    const input = [3, 1, 4, 1, 5];
//    const output = findMin(input);
//    console.log(output);


// 1)using reduce() method

function findMin(input){
   return input.reduce((acc,curr)=>{
        return curr<acc?curr:acc
   },Infinity)
}

// const input = [3, 1, 4, 1, 5];
//    const output = findMin(input);
//    console.log(output);


// 2)using for of loop

function findMin(input){
  let min=Infinity
  for(let val of input){
    if(val<min){
        min=val
    }
  }
  return min
}

const input = [3, 1, 4, 1, 5];  
const output = findMin(input)
console.log(output);