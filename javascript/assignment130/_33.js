// 33. Write a function `findDuplicates` that takes an array and returns an array containing all the duplicate elements.

// 1) using filter method

function findDuplicates(input){
   return input.filter((val,index)=>{
    return input.indexOf(val)!==index
   })
}
//  const input = [1, 2, 2, 3, 4, 4, 5];
//     const output = findDuplicates(input);
//     console.log(output); // [2, 4]



// 2)using for of loop

function findDuplicates(input){
    const newArr=[]
    for(let index in input){
        if(input.indexOf(input[index])!=index){
            newArr.push(input[index])
        }
    }
    return newArr
}



 const input = [1, 2, 2, 3, 4, 4, 5];
    const output = findDuplicates(input);
    console.log(output); // [2, 4]