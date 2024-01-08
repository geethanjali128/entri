// 36. Write a function `countVowels` that takes a string as input and returns the count of vowels (a, e, i, o, u) in the string.

function countVowels(input){
    let count=0
    for(let val of input){
        if(val=="a"||val=="e"||val=="i"||val=="o"||val=="u"){
            count+=1
        }
    }
    return count
}

 const input = "hello world";
   const output = countVowels(input);
   console.log(output); // 3
