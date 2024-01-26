// **8. Print Pattern:**
// Write a program to print a pattern of stars using a `for` loop.

const p=5
for(let i=1;i<=p;i++){
    let stars=" "
    for(let j=1;j<=i;j++){
        stars+="*"
    }
 
    console.log(stars)
}
