// **Question 4: Remove Duplicates from an Array**

// Write a function `removeDuplicates` that takes an array of numbers as input and returns a new array with duplicate values removed.

// **Example:**
// ```javascript
// const input = [1, 2, 2, 3, 4, 4, 5];
// const output = removeDuplicates(input);
// console.log(output); // [1, 2, 3, 4, 5]

// sol:

// 1)
// const newArr=[]
// function removeDuplicates(input){
//     input.filter((val,index)=>{
//         if(input.indexOf(val)===index){
//             newArr.push(val)
//         }
//     })
    
//     return newArr
// }
//  const input = [1, 2, 2, 3, 4, 4, 5];
// const output = removeDuplicates(input);
// console.log(output); 

// 2)
// function removeDuplicates(input){
//     let newArr=[]
//     input.forEach(element => {
//         if(!newArr.includes(element)){
//             newArr.push(element)
//         }
//     })
//     return newArr
// }
// const input = [1, 2, 2, 3, 4, 4, 5];
// const output = removeDuplicates(input);
// console.log(output); 

// 3)
function removeDuplicates(input){
    let newArr=[]
    for(let val of input){
        if(!newArr.includes(val)){
            newArr.push(val)
        }
    }
    return newArr
}
const input = [1, 2, 2, 3, 4, 4, 5];
const output = removeDuplicates(input);
console.log(output); 
