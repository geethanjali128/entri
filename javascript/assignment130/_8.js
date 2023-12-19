// 7. Write a function `capitalizeFirstLetter` that takes a string as input and returns the same string with the first letter capitalized.

//    **Example:**
//    ```javascript
//    const input = "hello world";
//    const output = capitalizeFirstLetter(input);
//    console.log(output); // "Hello world"


function capitalizeFirstLetter(input){
  let arr=input.split("")
  let addCapitalizeLetter=arr.splice(0,1,arr[0].toUpperCase())
  newInput=arr.join("")
   return newInput
}
 const input = "hello world";
   const output = capitalizeFirstLetter(input);
   console.log(output); // "Hello world"

  