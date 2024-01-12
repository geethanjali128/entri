// 42. Write a function `indexOfElement` that takes an array and an element as input and returns the index of the first occurrence of the element in the array. If the element is not found, return -1.

// 1)using for and for of loop

function indexOfElement(arr,element){
  for(let val of arr){
    if(val===element){
        return arr.indexOf(val)
    }
  }
    return -1
}
// const inputArray = [1, 2, 3, 4, 5];
//    const element = 3;
//    const output = indexOfElement(inputArray, element);
//    console.log(output); // 2

// 1)using filter()

function indexOfElement(arr,element){
  let index
  arr.filter((val)=>{
    if(val===element){
      return index=arr.indexOf(val)
    }
  })
 return index
}





const inputArray = [1, 2, 3, 4, 5];
   const element = 3;
   const output = indexOfElement(inputArray, element);
   console.log(output); // 2
