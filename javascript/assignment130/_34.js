// 34. Write a function `findIntersection` that takes two arrays as input and returns an array containing the elements that are common to both input arrays.

// 1)using for of and for loops and new Set

function findIntersection(inputArray1,inputArray2){
    const commonArray=[]
    for(let val1 of inputArray1){
        for(let val2 of inputArray2){
            if(val1===val2){
                commonArray.push(val1)
            }
        }
    }
    return [...new Set(commonArray)]
}

//  const inputArray1 = [1, 2, 3, 4, 5,];
//     const inputArray2 = [3, 4, 5, 6, 7];
//     const output = findIntersection(inputArray1, inputArray2);
//     console.log(output); // [3, 4, 5]

// 2) using filter


function findIntersection(inputArray1,inputArray2){
    const result=inputArray1.filter((val)=>{
        return inputArray2.includes(val)
    })
    return [...new Set(result)]
}

    const inputArray1 = [1, 2, 3, 4, 5,];
    const inputArray2 = [3, 4, 5, 6, 7];
    const output = findIntersection(inputArray1, inputArray2);
    console.log(output); // [3, 4, 5]

