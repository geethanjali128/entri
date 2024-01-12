// 41. Write a function `filterWordsByLength` that takes an array of words (strings) and a length as input and returns an array containing only the words of the specified length.

//    **Example:**
//    ```javascript
//    const inputWords = ["apple", "banana", "cherry", "date"];
//    const inputLength = 5;
//    const output = filterWordsByLength(inputWords, inputLength);
//    console.log(output); // ["apple", "cherry"]

// 1)using filter() method

function filterWordsByLength(input,inputLength){
    return input.filter((val)=>{
        if(val.length===inputLength){
            return val
        }
    })
}

// const inputWords = ["apple", "banana", "cherry", "date"];
//    const inputLength = 5;
//    const output = filterWordsByLength(inputWords, inputLength);
//    console.log(output); // ["apple", "cherry"]



// 1)using for and for of loop

function filterWordsByLength(input,inputLength){
    let newArr=[]
    for(let i=0;i<input.length;i++){
        if(input[i].length===inputLength){
            newArr.push(input[i])
        }
    }
    return newArr
}



const inputWords = ["apple", "banana", "cherry", "date"];
   const inputLength = 5;
   const output = filterWordsByLength(inputWords, inputLength);
   console.log(output); // ["apple", "cherry"]