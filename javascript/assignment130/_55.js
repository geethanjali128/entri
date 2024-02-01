// finding missing number in an array

// 1)findin missing number an pushing it into that array
function findMissingNumber(array){
    let n=5
    for(let i=1;i<=n;i++){
        if(!array.includes(i)){
            array.push(i)
        }
    }
   
   return array.sort((a,b)=>{return a-b})
   
}
console.log(findMissingNumber([1,2,3,5]))

// 2)finding missing number
let n=5
function findmissing(arr,n){
    let sum=0
    for(ele of arr){
        sum+=ele
    }
    let actualSum=n*(n+1)/2
    return actualSum-sum
}
console.log(findmissing([1,2,3,5],n))