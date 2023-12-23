// 18. Write a function `filterEvenNumbers` that takes an array of numbers as input and returns a new array containing only the even numbers.

//     **Example:**
//     ```javascript
//     const input = [1, 2, 3, 4, 5, 6];
//     const output = filterEvenNumbers(input);
//     console.log(output); // [2, 4, 6]

// 1) using filter method
function filterEvenNumbers(input){
    return input.filter((val)=>{
       return val%2===0
    })
}

// const input = [1, 2, 3, 4, 5, 6];
//     const output = filterEvenNumbers(input);
//     console.log(output); // [2, 4, 6]


// 2) using for loop
function filterEvenNumbers(input){
    const newArr=[]
    for(let i=0;i<input.length;i++){
        if(input[i]%2===0){
            newArr.push(input[i])
        }
    }
    return newArr
}

//  we can also got this through for of loop

const input = [1, 2, 3, 4, 5, 6];
    const output = filterEvenNumbers(input);
    console.log(output); // [2, 4, 6]