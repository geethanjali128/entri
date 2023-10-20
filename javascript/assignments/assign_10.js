// Positive, Negative, or Zero
// Write a function positiveNegativeZero that takes a number as input and prints "Positive" if the number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.

// sol:

function positiveNegativeZero(number){
    if(number>0){
        console.log("Positive" )
    }else if(number<0){
        console.log("Negative")
    }else {
        console.log("Zero")
    }
}
positiveNegativeZero(-2)
