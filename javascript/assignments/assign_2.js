// 2)Write a JavaScript function to convert a string into abbreviated form. 
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

// function
function abbrev_name1(str,num){
    return str.slice(0,num)+"."
}
console.log(abbrev_name1("Robin Singh",7))

// function
function abbrev_name(string){
    const text=string.split(" ")
   return text[0]+" "+text[1][0]
}
console.log(abbrev_name("Robin Singh"))