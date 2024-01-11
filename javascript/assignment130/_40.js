// 40. Write a function `countWordsInArray` that takes an array of strings as input and returns an array where each element is the count of words in the corresponding string.

//    **Example:**
//    ```javascript
//    const input = ["Hello world!", "This is a test sentence.", "Count me."];
//    const output = countWordsInArray(input);
//    console.log(output); // [2, 5, 2]

// 1)using for loop

function countWordsInArray(input){
   let newArr=[]
   for(let i=0;i<input.length;i++){
   let arr=input[i].trim().split(/\s/)
  
      newArr.push(arr.length)
   
    }
   return newArr
}

// const input = ["Hello world!", "This is a test sentence.", "Count me."];
//    const output = countWordsInArray(input);
//    console.log(output); // [2, 5, 2]


// 2)usiing flter

// function countWordsInArray(input){
//    return input.filter((val)=>{
//      const  newArr=val.split("  ")
//       return newArr.length
//    })
// }





const input = ["Hello world!", "This is a test sentence.", "Count me."];
   const output = countWordsInArray(input);
   console.log(output); // [2, 5, 2]