// 15. Write a function `rotateArray` that takes an array and a number `k` as input and rotates the array to the right by `k` positions.

//    **Example:**
//    ```javascript
//    const inputArray = [1, 2, 3, 4, 5];
//    const k = 2;
//    const output = rotateArray(inputArray, k);
//    console.log(output); // [4, 5, 1, 2, 3]

//  1)
// function rotateArray(inputArray,k){
//     for(let i=0;i<k;i++){
//        inputArray.unshift(inputArray.pop())
//     }
//     return inputArray
// }
//  const inputArray = [1, 2, 3, 4, 5];
//    const k = 2;
//    const output = rotateArray(inputArray, k);
//    console.log(output)

// 2)
function rotateArray(arr,number){
    let removedArray=arr.splice(arr.length-number)
    for(let i=0;i<removedArray.length;i++){
        arr.splice(i,0,removedArray[i])
    }
    return arr
}
const inputArray = [1, 2, 3, 4, 5];
   const k = 2;
   const output = rotateArray(inputArray, k);
   console.log(output)