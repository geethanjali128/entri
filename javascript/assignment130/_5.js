
// **Question 5: Check for Palindrome**

// Write a function `isPalindrome` that takes a string as input and returns `true` if it's a palindrome (reads the same forwards and backward), and `false` otherwise.

// **Example:**
// ```javascript
// const input = "racecar";
// const output = isPalindrome(input);
// console.log(output); // true
// ```

// A palindromic number is a number (such as 16461) that remains the same when its digits are reversed.

// 1)
// function isPalindrome(input){
//   let j=input.length-1
//   for(let i=0;i<input.length;i++){
//     if(input[i]!=input[j]){
//         return false
//     }
//     j--
//   }
//   return true

   
// }
// const input = "racecar";
// const output = isPalindrome(input);
// console.log(output); 

// 2)
function isPalindrome(input){
    let reversedStr=""
    for(let i=input.length-1;i>=0;i--){
        reversedStr+=input[i]
    }
    if(reversedStr==input){
        return true
    }
    return false
}
const input = "racecar";
const output = isPalindrome(input);
console.log(output); 