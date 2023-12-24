// 21. Write a function `findUnique` that takes two arrays as input and returns an array containing elements that are unique to each input array (i.e., not common between them).

//     **Example:**
//     ```javascript
//     const inputArray1 = [1, 2, 3, 4, 5];
//     const inputArray2 = [3, 4, 5, 6, 7];
//     const output = findUnique(inputArray1, inputArray2);
//     console.log(output); // [1, 2, 6, 7]

// sol:

// 1)using filter() method

function findUnique(inputArray1,inputArray2){
 let uniqueOFInputArray1=inputArray1.filter(ele=>{ return !inputArray2.includes(ele)})
 let uniqueOFInputArray2=inputArray2.filter(ele=>{ return !inputArray1.includes(ele)})
  
  return uniqueOFInputArray1.concat(uniqueOFInputArray2)
 
}

    // const inputArray1 = [1, 2, 3, 4, 5];
    // const inputArray2 = [3, 4, 5, 6, 7];
    // const output = findUnique(inputArray1, inputArray2);
    // console.log(output)


    // 2)using a "for of" loop and here we can also "for" loop here

    function findUnique(inputArray1,inputArray2){
      const uniqueElements=[]
      for(let val of inputArray1){
        if(!inputArray2.includes(val)){
          uniqueElements.push(val)
        }
      }
      for(let val of inputArray2){
        if(!inputArray1.includes(val)){
          uniqueElements.push(val)
        }
      }
      return uniqueElements
    }




       const inputArray1 = [1, 2, 3, 4, 5];
    const inputArray2 = [3, 4, 5, 6, 7];
    const output = findUnique(inputArray1, inputArray2);
    console.log(output)