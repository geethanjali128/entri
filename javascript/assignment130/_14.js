// 14. Write a function `findAverage` that takes an array of numbers as input and returns the average of all the numbers.

//    **Example:**
//    ```javascript
//    const input = [10, 20, 30, 40, 50];
//    const output = findAverage(input);
//    console.log(output); // 30

// 1) using for loop
function findAverage(input){
    let sum=0
    for(let i=0;i<input.length;i++){
        sum+=input[i]
    }
    return sum/input.length
}
//    const input = [10, 20, 30, 40, 50];
//    const output = findAverage(input);
//    console.log(output);


// 2)using reduce method

function findAverage(input){
    return input.reduce((acc,curr)=>{
     acc+=curr/input.length
      return acc
    },0)
}





  const input = [1,2,3,4,5];
   const output = findAverage(input);
   console.log(output);