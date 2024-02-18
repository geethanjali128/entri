
var a=1;
// console.log(a)
var a=2
// console.log(a)
a=5
// console.log(a)

let b=3
// console.log(b)
// let b=5
b=10
// console.log(b)

const c=5
// console.log(c)
// const c=6
// c=7
// console.log(c)


let text="geethanjali"
// console.log(text.length)
// console.log(typeof(text))
// let slice=text.slice(5,11)
// console.log(slice)
// let slice1=text.slice(5)
// console.log(slice1)
// let slice2=text.slice(-6,-3)
// console.log(slice2)

let str="rohith kumar"
let extract=str.slice(0,6)
// console.log(extract)
let extract1=str.slice(7)
// console.log(extract1)
let extract2=str.slice(-5)
// console.log(extract2)
let extract3=str.slice(-5,-1)
// console.log(extract3)
let extract4=str.substring(0,6)
// console.log(extract4)
let extract5=str.substr(7,6)
// console.log(extract5)

let replace=str.replace("kumar","karna")
// console.log(replace)
str="rohith kumar KUmar"
let replace1=str.replace(/kumar/ig,"karna")
// console.log(replace1)
str="rohith kumar kumar"
let replace2=str.replaceAll("kumar","karna")
// console.log(replace2)

// console.log(text.toUpperCase())
// console.log(text.toLowerCase())
// console.log(text)
// console.log(text.concat(" ",str))
let data="    geetha    "
// console.log(data.trim())
// console.log(data.trimStart())
// console.log(data.trimEnd())
data="geetha"
// console.log(data.padStart(9,"#"))
// console.log(data.padEnd(9,"#"))
console.log(data.charAt(0))
// console.log(data.charAt(7))
// console.log(data.split(""))
data="kumar suresh, radha,suresh rama"
// console.log(data.split(" "))
// console.log(data.split(","))
console.log(data.indexOf("suresh"))
console.log(data.lastIndexOf("suresh"))
