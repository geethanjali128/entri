// 10. Write a function `removeVowels` that takes a string as input and returns the string with all vowels removed.

//    **Example:**
//    ```javascript
//    const input = "Hello, how are you?";
//    const output = removeVowels(input);
//    console.log(output); // "Hll, hw r y?"

function removeVowels(input){
    let arr=input.split("")
   let vowelRemovedStr=" "
   for(let i=0;i<arr.length;i++){
        if(arr[i]!="a"&&arr[i]!="e"&&arr[i]!="i"&&arr[i]!="o"&&arr[i]!="u"){
            vowelRemovedStr+=arr[i]
        }
        }
        return vowelRemovedStr
}
 const input = "Hello, how are you?";
   const output = removeVowels(input);
   console.log(output); // "Hll, hw r y?"