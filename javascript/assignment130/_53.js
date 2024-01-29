// **10. Reverse an Array:**
// Write a program to reverse the elements of an array using a `for` loop.

const array=["karra","geethanjali","hello"]
const newArr=[]
for(let i=array.length-1;i>=0;i--){
  newArr.push(array[i])
}
console.log(newArr)