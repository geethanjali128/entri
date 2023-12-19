// 11. Write a function `isAnagram` that takes two strings as input and returns `true` if they are anagrams (contain the same characters in a different order), and `false` otherwise.

//    **Example:**
//    ```javascript
//    const input1 = "listen";
//    const input2 = "silent";
//    const output = isAnagram(input1, input2);
//    console.log(output); // true


//  1)
 function isAnagram(input1,input2){
     for(let val1 of input1){
        for(let val2 of input2){
            if(input1.length==input2.length){
                if(val2===val1)
                return true
            }
        }
   }
return false
}
const input1 = "listen";
   const input2 = "silent";
   const output = isAnagram(input1, input2);
   console.log(output); 



// 2)
   // function isAnagram(input1,input2){
//    let sort1=input1.split("").sort().join("")
//    let sort2=input2.split("").sort().join("")
//    for(let val1 of sort1){
//         for(let val2 of sort2){
//             if(sort1.length==sort2.length){
//                 if(val2===val1)
//                 return true
//             }
//         }
//    }
// return false

   
// }
// const input1 = "listen";
//    const input2 = "silent";
//    const output = isAnagram(input1, input2);
//    console.log(output); // true