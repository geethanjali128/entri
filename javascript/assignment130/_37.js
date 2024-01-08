// 37. Write a function `findLongestWord` that takes a sentence (string) as input and returns the length of the longest word in the sentence.

//    **Example:**
//    ```javascript
//    const input = "This is a simple sentence";
//    const output = findLongestWord(input);
//    console.log(output); // 8
//    ```

// 1)using split(),sort() and .length

function findLongestWord(input){
    const splitt=input.trim().split(" ").filter((val)=>{return val!==" "}).sort((a,b)=>{
        return b.length-a.length
        // or
        // return a.length-b.length
    })
    return splitt[0].length
    // or
    // return splitt[splitt.length-1].length
    
}
 const input = "This is a simple sentence";
   const output = findLongestWord(input);
   console.log(output); // 8