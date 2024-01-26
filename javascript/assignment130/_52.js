// **9. Find Largest Element in an Array:**
// Write a program to find the largest element in an array using a `for` loop.

const arr=[10,2,34,56,7]
let maxNumber=arr[0]
for(let i=1;i<=arr.length;i++){
    if(arr[i]>maxNumber){
        maxNumber=arr[i]
    }
}
console.log(maxNumber)