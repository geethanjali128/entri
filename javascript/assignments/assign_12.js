// 12)Even or Odd
// Write a function evenOrOdd that takes an integer as input and prints "Even" if the number is even, and "Odd" if the number is odd.

// sol:
function evenOrOdd(integer){
    if(integer%2===0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}
evenOrOdd(-11)