// 23. Write a function `reverseWords` that takes a string as input and returns the string with its words reversed.

// 1)using for loop 

function reverseWords(input){
   let arr=input.trim().split(" ").filter((val)=> { return val!==" "})
    let reversedWordsString=" "
   for(let i=arr.length;i>=0;i--){
    reversedWordsString+=arr[i]+" "
   }
   return reversedWordsString
}

   const input = "Hello world";
   const output = reverseWords(input);
   console.log(output); // "world Hello"



// 2)using array methods ,split(), reverse() and join()


function reverseWords(input){
    return input.split(" ").reverse().join(" ")
}

// const input = "Hello world";
//    const output = reverseWords(input);
//    console.log(output); // "world Hello"



//    3)using for loop,split() and reverse()

function  reverseWords(input){
   let arr=input.split(" ").reverse()
    let reversedWordsString=" "
   for(let i=0;i<arr.length;i++){
    reversedWordsString+=arr[i]+" "
   }
   return reversedWordsString
}

// const input = "Hello world";
//    const output = reverseWords(input);
//    console.log(output); // "world Hello"
