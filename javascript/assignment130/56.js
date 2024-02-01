// without taking an new array remove and addend that  0's in that array
const arr=[1,2,0,4,0,3,0,5]

for(let val of arr){
    if(val===0){
        arr.splice(arr.indexOf(val),1)
        arr.push(val)
    }
}
console.log(arr)