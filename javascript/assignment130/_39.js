// 39. Write a function `findMaxInArray` that takes an array of numbers as input and returns the maximum number in the array using a `for` loop and `if-else` statements.

//    **Example:**
//    ```javascript
//    const input = [3, 7, 1, 9, 5];
//    const output = findMaxInArray(input);
//    console.log(output); // 9

// function findMaxInArray(input){
//     input.sort((a,b)=>{return a-b})
//     let max=Infinity
//     let result
//     for(let i=0;i<input.length;i++){
//         if(input[i]<max){
//             result=input[i]
//         }
//     }
//     return result
// }

// const input = [3, 7, 1, 9, 5];
//    const output = findMaxInArray(input);
//    console.log(output); // 9


function findMaxInArray(input){

    let max=-Infinity
   
    for(let i=0;i<input.length;i++){
        if(input[i]>max){
            max=input[i]
        }
    }
    return max
}

const input = [3, 7, 1, 9, 5];
   const output = findMaxInArray(input);
   console.log(output); // 9