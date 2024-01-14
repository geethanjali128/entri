// 43. Write a function `filterOddNumbers` that takes an array of numbers as input and returns an array containing only the odd numbers.

//    **Example:**
//    ```javascript
//    const input = [1, 2, 3, 4, 5, 6];
//    const output = filterOddNumbers(input);
//    console.log(output); // [1, 3, 5]

// 1)using filter() method

function filterOddNumbers(input){
    return input.filter((val)=>{
        return val%2!==0
    })
}

//   const input = [1, 2, 3, 4, 5, 6];
//    const output = filterOddNumbers(input);
//    console.log(output); // [1, 3, 5]

// 2)using for and for of loop

function filterOddNumbers(input){
    const oddArr=[]
    for(let val of input){
        if(val%2!==0){
            oddArr.push(val)
        }
    }
    return oddArr
}


  const input = [1, 2, 3, 4, 5, 6];
   const output = filterOddNumbers(input);
   console.log(output); // [1, 3, 5]