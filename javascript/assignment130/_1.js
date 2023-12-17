// Write a function `reverseString` that takes a string as input and returns the reverse of that string.

// **Example:**
// ```javascript
// const input = "hello";
// const output = reverseString(input);
// console.log(output); // "olleh"

// sol:

let text=""
function reverseString(str){
    let sp=str.split("")
    for(let i=sp.length-1;i>=0;i--){
    text+=sp[i]
    }
    return text;
}




