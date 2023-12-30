// 27. Write a function `findMin` that takes an array of numbers as input and returns the minimum number in the array.

// 1) using reduce()mehtod

function findMin(input){
    return input.reduce((acc,curr)=>{
        if(curr<acc){
            acc=curr
        }
        return acc
        // or
    //    return  curr<acc?curr:acc
        
    },Infinity)
}
//  const input = [3, 1, 4, 1, 5];
//    const output = findMin(input);
//    console.log(output); // 1


   function findMin(input){
    let arr=input.sort((a,b)=>{
        return (a-b)
    })

return arr[0]
   
}
//  const input = [3, 1, 4, 1, 5];
//    const output = findMin(input);
//    console.log(output); // 1


function findMin(input){
    let arr=input.sort((a,b)=>{
        return (b-a)
    })

 let max=Infinity
   let min
   for(let val of arr){
    if(val<max){
        min=val
    }
   }
   return min
//    or
// return arr[arr.length-1]
   
}
 const input = [3, 1, 4, 1, 5];
   const output = findMin(input);
   console.log(output); // 1