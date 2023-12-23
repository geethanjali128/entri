// 19. Write a function `findDuplicates` that takes an array and returns an array containing all the duplicate elements.

//     **Example:**
//     ```javascript
//     const input = [1, 2, 2, 3, 4, 4, 5];
//     const output = findDuplicates(input);
//     console.log(output); // [2, 4]

// 1) using filter method
function findDuplicates(arr){
   return arr.filter((val,index)=>{
       return arr.indexOf(val)!==index
   })
}
// const input = [1, 2, 2, 3, 4, 4, 5];
//     const output = findDuplicates(input);
//     console.log(output); // [2, 4]


// 2)using for of loop

function findDuplicates(arr){
    const newArr=[]
    for(let index in arr){
        if(arr.indexOf(arr[index])!=index){
            newArr.push(arr[index])
        }
    }
    return newArr
}
const input = [1, 2, 2, 3, 4, 4, 5];
    const output = findDuplicates(input);
    console.log(output); // [2, 4]