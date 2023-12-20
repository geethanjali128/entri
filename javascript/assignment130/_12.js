// 12. Write a function `sumArray` that takes an array of numbers as input and returns the sum of all the numbers.

//    **Example:**
//    ```javascript
//    const input = [1, 2, 3, 4, 5];
//    const output = sumArray(input);
//    console.log(output); // 15


// sol:

// 1)using reduce mothod

function  sumArray(input){
    return input.reduce((acc,curr)=>{
        return  acc+=curr
    },0)
}

//    const input = [1, 2, 3, 4, 5];
//    const output = sumArray(input);
//    console.log(output); // 15


// 2) using for loop
function sumArray(input){
    let sum=0
    for(let i=0;i<input.length;i++){
        sum+=input[i]
    }
    return sum
}

//  const input = [1, 2, 3, 4, 5];
//    const output = sumArray(input);
//    console.log(output)

// 3)using for of loop

function sumArray(input){
    let sum=0
    for(let val of input){
        sum+=val
    }
    return sum
}

 const input = [1, 2, 3, 4, 5];
   const output = sumArray(input);
   console.log(output)