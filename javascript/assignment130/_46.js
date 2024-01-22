// **3. Fibonacci Sequence:**
// Generate and print the first `n` terms of the Fibonacci sequence using a `for` loop.

// fibonacci sequence:-The Fibonacci sequence is a type  of series where each number is the sum of the two that precede it. For example, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377.


const n=7
let first=0
let second=1
let next
// console.log(first)
// console.log(second)
for(let i=2;i<n;i++){
    next=first+second
    // console.log(next)
    first=second
    second=next 
}
console.log(next)