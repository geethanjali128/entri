// 25. Write a function `isAnagram` that takes two strings as input and returns `true` if they are anagrams (contain the same characters in a different order), and `false` otherwise.

// 1)using for of  loop

function isAnagram(input1,input2){
    for(let val1 of input1){
        for(let val2 of input2){
            if(input1.length==input2.length&&val1===val2){
                return true
            }
        }
    }
    return false
}

//  const input1 = "listen";
//    const input2 = "silent";
//    const output = isAnagram(input1, input2);
//    console.log(output); // true




// 2)using for loop

function isAnagram(input1,input2){
    for(let i=0;i<input1.length;i++){
        for(let j=0;j<input2.length;j++){
            if(input1.length===input2.length&&input1[i]===input2[j]){
                return true
            }
        }
    }
    return false
}

//    const input1 = "listen";
//    const input2 = "silent";
//    const output = isAnagram(input1, input2);
//    console.log(output); // true

   function isAnagram(input1,input2){
   let arr1=input1.split("")
   let arr2=input2.split("")
   arr1.filter((val)=>{
     if(arr1.length===arr2.length&&arr2.includes(val)){
       return  true
    }
   })
   return  false
   }

   const input1 = "listen";
   const input2 = "silent";
   const output = isAnagram(input1, input2);
   console.log(output); // true