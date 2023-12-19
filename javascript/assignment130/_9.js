// 9. Write a function `reverseWords` that takes a string as input and returns the string with its words reversed.

//    **Example:**
//    ```javascript
//    const input = "Hello world";
//    const output = reverseWords(input);
//    console.log(output); // "world Hello"

function reverseWords(input){
   let arr=input.split(" ")
   let newArr=arr.reverse()
   let reversedStr=" "
   for(let i=0;i<newArr.length;i++){
    reversedStr+=newArr[i]+" "
   }
   return reversedStr
}
 const input = "Hello world";
   const output = reverseWords(input);
   console.log(output);