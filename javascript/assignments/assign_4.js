// 4)Write a JavaScript function to capitalize the first letter of a string. 
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

// sol:

function captilize(str){
    return str[0].toUpperCase()+str.slice(1)
}
console.log(captilize("js string exercises"))