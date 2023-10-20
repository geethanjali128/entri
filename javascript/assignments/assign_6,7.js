// 6)Write a function truncateText that takes a string and a maximum length as input and returns a truncated version of the string if it exceeds the maximum length, adding "..." at the end.
// 7)console.log(truncateText("This is a long sentence.", 10));
//  // Output: "This is a..."
// console.log(truncateText("Short text.", 15)); 
// // Output: "Short text."



// sol:
function truncateText(string,maxlength){
    if(string.length>maxlength){
        return string.slice(0,maxlength)+"..."
    }
    return string
}
console.log(truncateText("This is a long sentence.", 10))
console.log(truncateText("Short text.", 15)); 
