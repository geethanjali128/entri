// **6. Prime Number Check:**
// Write a program to check if a given number `n` is prime using a `for` loop.

const n=5
let isPrime=true
for(let i=2;i<=n;i++){   //0 and 1 are not considered as prime numbers,so we initialize i as 2 
   if(n%2==0){
    isPrime=false
    break
   }
}
console.log(isPrime)