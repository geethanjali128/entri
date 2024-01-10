// 38. Write a function `findEvenNumbers` that takes an array of numbers as input and returns an array containing only the even numbers.

// 1)we can solve this by fliter() method and for of and for loops

function  findEvenNumbers(input){
    return input.filter((val)=>{
        return val%2===0
    })
}

 const input = [1, 2, 3, 4, 5, 6];
   const output = findEvenNumbers(input);
   console.log(output); // [2, 4, 6]
