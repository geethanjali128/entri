// **2. Factorial of a Number:**
// Write a program to calculate the factorial of a given number `n` using a `for` loop.


// factorial of n=n(n-1)(n-2)(n-3)------
// factorial of 5=5(5-1)(5-2)(5-3)(5-4)=5*4*3*2*1=120

const n=5
let factorial=1
for(let i=1;i<=n;i++){
    factorial*=i
}
console.log(factorial)
