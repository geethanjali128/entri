// 20. Write a function `findIntersection` that takes two arrays as input and returns an array containing the elements that are common to both input arrays.

//     **Example:**
//     ```javascript
//     const inputArray1 = [1, 2, 3, 4, 5];
//     const inputArray2 = [3, 4, 5, 6, 7];
//     const output = findIntersection(inputArray1, inputArray2);
//     console.log(output); // [3, 4, 5]
// 


// 1) using for loop and [...new Set()]
function findIntersection(inputArray1,inputArray2){
    const intersectionArr=[]
    for(let i=0;i<inputArray1.length;i++){
      for(let j=0;j<inputArray2.length;j++){
        if(inputArray1[i]===inputArray2[j]){
            intersectionArr.push(inputArray2[j])
        }
      }
    }
    return [...new Set(intersectionArr)]
}
// here [...new Set()] method returns a common elements with no repeating 

// const inputArray1 = [1, 2, 3, 4, 5,3,4];
//     const inputArray2 = [3, 4, 5, 6, 7];
//     const output = findIntersection(inputArray1, inputArray2);
//     console.log(output); // [3, 4, 5]

// 2)
function findIntersection(inputArray1,inputArray2){
    let result= inputArray1.filter((ele)=>{
        return inputArray2.includes(ele)
      })
      return [... new Set(result)]
}



    const inputArray1 = [1, 2, 3, 4, 5];
    const inputArray2 = [3, 4, 5, 6, 7];
    const output = findIntersection(inputArray1, inputArray2);
    console.log(output); // [3, 4, 5]