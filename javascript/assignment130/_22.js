// 22. Write a function `capitalizeFirstLetter` that takes a string as input and returns the same string with the first letter capitalized.

// 1)using "split","shift","unshift","join" and "toUpperCae()"

function capitalizeFirstLetter(input){
    let splitt=input.split("")
    splitt.unshift(splitt.shift().toUpperCase())
    return splitt.join("")
}
// console.log(capitalizeFirstLetter("hello"))


// 2) using "string.charAt()","string.replace()" and "toUpperCae()"
function capitalizeFirstLetter(input){
   return input.replace(input.charAt(0),input.charAt(0).toUpperCase())
}
// console.log(capitalizeFirstLetter("hello"))


// 3)using splice()
function capitalizeFirstLetter(input){
  let arr=input.split("")
  arr.splice(0,1,arr[0].toUpperCase())
  return arr.join("")
}


console.log(capitalizeFirstLetter("hello"))




// 4) using "slice" ,"concat" and "toUpperCae()" here we can alos use "substr and ""substring"
function capitalizeFirstLetter(input){
   let extract=input.slice(0,1)
   let extract1=input.slice(1)
  let capitalize=extract.toUpperCase()
  return capitalize.concat(extract1)
}


// console.log(capitalizeFirstLetter("hello"))