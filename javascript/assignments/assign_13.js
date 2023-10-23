// 13)Age Eligibility
// Write a function checkAge that takes an age as input. The function should return "Allowed" if the age is between 18 and 65 (inclusive), and "Not allowed" otherwise.

// sol:

function checkAge(age){
    if(age>=18&&age<=65){
        return "Allowed"
    }else{
        return "Not Allowed"
    }
}
console.log(checkAge(80))