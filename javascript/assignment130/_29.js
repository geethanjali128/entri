// 29. Write a function `rotateArray` that takes an array and a number `k` as input and rotates the array to the right by `k` positions.

// function rotateArray(inputArray,k){
//    for(let i=0;i<k;i++){
//    inputArray.unshift(inputArray.pop())
//  }
//  return  inputArray
// }

// const inputArray = [1, 2, 3, 4, 5];
//    const k = 2;
//    const output = rotateArray(inputArray, k);
//    console.log(output); // [4, 5, 1, 2, 3]


function rotateArray(inputArray,k){
   let spliced=inputArray.splice(inputArray.length-k)
   for(let i=0;i<spliced.length;i++){
    inputArray.splice(i,0,spliced[i])
   }
    
   return inputArray
}



   const inputArray = [1, 2, 3, 4, 5];
   const k = 2;
   const output = rotateArray(inputArray, k);
   console.log(output); // [4, 5, 1, 2, 3]

  