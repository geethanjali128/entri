// 35. Write a function `findUnique` that takes two arrays as input and returns an array containing elements that are unique to each input array (i.e., not common between them).

// 1)using filter()

function findUnique(inputArray1,inputArray2){
   let filter1=inputArray1.filter((val)=>{return !inputArray2.includes(val)})
    let filter2=inputArray2.filter((val)=>{return !inputArray1.includes(val)})
    return filter1.concat(filter2)
}


// const inputArray1 = [1, 2, 3, 4, 5];
//     const inputArray2 = [3, 4, 5, 6, 7];
//     const output = findUnique(inputArray1, inputArray2);
//     console.log(output); // [1, 2, 6, 7]


// 2)using for of and for loops
function findUnique(inputArray1,inputArray2){
   const uniqueElements=[]
   for(let val1 of inputArray1){
    if(!inputArray2.includes(val1)){
        uniqueElements.push(val1)
    }
   }
     for(let val2 of inputArray2){
    if(!inputArray1.includes(val2)){
        uniqueElements.push(val2)
    }
   }
   return uniqueElements
}



const inputArray1 = [1, 2, 3, 4, 5];
    const inputArray2 = [3, 4, 5, 6, 7];
    const output = findUnique(inputArray1, inputArray2);
    console.log(output); // [1, 2, 6, 7]

