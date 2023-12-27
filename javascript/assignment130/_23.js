// 22. Write a function `countWords` that takes a string as input and returns the number of words in the string.

//    **Example:**
//    ```javascript
//    const input = "This is a sample sentence.";
//    const output = countWords(input);
//    console.log(output); // 5

function countWords(input){
    let arr=input.split(" ")
    return arr.length
}

const input = "This is a sample sentence.";
   const output = countWords(input);
   console.log(output); // 5
