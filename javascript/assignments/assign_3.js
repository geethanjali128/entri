// 3)Write a JavaScript function that hides email addresses to prevent unauthorized access. 
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

// sol:

function protect_email(email){
    const part1=email.split("@")
    const part2=part1[0].slice(0,5)+"..."+"@"
    const newEmail=part2+part1[1]
    return newEmail
}
console.log(protect_email("robin_singh@example.com"))

