// **1. Sum of Natural Numbers:**
// Write a program to calculate the sum of natural numbers from 1 to `n` using a `for` loop.

// sum of first n natural numbers=n(n+1)/2

const n=10
let sum =0
for(let i=0;i<=n;i++){
    sum+=i
}
console.log(sum)

// or()
function sumOfNaturalNumbers(n){
    return n*(n+1)/2
}
console.log(sumOfNaturalNumbers(5))