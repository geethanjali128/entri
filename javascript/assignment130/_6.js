// Write a function `reverseString` that takes a string as input and returns the reverse of that string.

// **Example:**
// ```javascript
// const input = "hello";
// const output = reverseString(input);
// console.log(output); // "olleh"

let text=""
function reverseString(str){
    
    for(let i=str.length-1;i>=0;i--){
    text+=str[i]
    }
    return text;
}

const input = "hello";
const output = reverseString(input);
console.log(output);