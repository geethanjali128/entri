// 24. Write a function `removeVowels` that takes a string as input and returns the string with all vowels removed.


// 1)using for of 

function removeVowels(input){
    let arr=input.split("")
    let vowelRemovedStr=" "
    for(let val of arr){
        if(val!=="a"&&val!=="e"&&val!=="i"&&val!=="o"&&val!=="u"){
            vowelRemovedStr+=val
        }
    }
    return vowelRemovedStr
}

//  const input = "Hello, how are you?";
//    const output = removeVowels(input);
//    console.log(output); // "Hll, hw r y


// 2)using for loop 

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
//  const input = "Hello, how are you?";
//    const output = removeVowels(input);
//    console.log(output); // "Hll, hw r y?"


// 3)using filter()

function removeVowels(input){
    let arr=input.split("")
   let filter=arr.filter((val)=>{
    return val!="a"&&val!="e"&&val!="i"&&val!="o"&&val!="u"
   })
   return filter.join("")
}


const input = "Hello, how are you?";
   const output = removeVowels(input);
   console.log(output); // "Hll, hw r y?"