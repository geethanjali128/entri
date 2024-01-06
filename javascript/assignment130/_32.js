// 32. Write a function `filterEvenNumbers` that takes an array of numbers as input and returns a new array containing only the even numbers.

// 1)using filter

function filterEvenNumbers(input){
    return input.filter((val)=>{
        return val%2===0
    })
}

//   const input = [1, 2, 3, 4, 5, 6];
//     const output = filterEvenNumbers(input);
//     console.log(output); // [2, 4, 6]



// 2)using for of loop
    function filterEvenNumbers(input){
        const newArr=[]
        for(let val of input){
            if(val%2===0){
                newArr.push(val)
            }
        }
        return newArr
    }

    // const input = [1, 2, 3, 4, 5, 6];
    // const output = filterEvenNumbers(input);
    // console.log(output); // [2, 4, 6]