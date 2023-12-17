// **Question 3: Count the Occurrences of a Character in a String**

// Write a function `countChar` that takes a string and a character as input and returns the number of times that character appears in the string.

// **Example:**
// ```javascript
// const inputString = "programming";
// const inputChar = "m";
// const output = countChar(inputString, inputChar);
// console.log(output); // 2

// sol:


// 1)
function countChar(inputString, inputChar){
   let count=0
   for(let val of inputString){
    if(val==inputChar){
        count+=1
    }
   }
   return count

}
// console.log(countChar("programming","g"))


// 2)
// function countChar(inputString,inputChar){
//     let arr=inputString.split("")
//     let count=0
//     for(let i=0;i<arr.length;i++){
//       arr[i]==inputChar?count++:0
//     }
//     return count
// }
//  console.log(countChar("programming","g"))