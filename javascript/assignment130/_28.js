// 28. Write a function `findAverage` that takes an array of numbers as input and returns the average of all the numbers.

// 1)using reduce() method

function findAverage(input){
    let average=input.reduce((acc,curr)=>{
        return acc+=curr
    },0)
    return average/input.length
}
//  const input = [10, 20, 30, 40, 50];
//    const output = findAverage(input);
//    console.log(output); // 30


// 2)using for of loop
function findAverage(input){
    let sum=0
    for(let val of input){
        sum+=val
    }
    let average=sum/input.length
    return average
}

 const input = [10, 20, 30, 40, 50];
   const output = findAverage(input);
   console.log(output); // 30

//    3)similarly we can use for loop to find average