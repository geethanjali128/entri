
function  abc (){
    console.log("hello")
}

console.log("hii")
// setTimeout(abc,1000)
const interval=setInterval(abc,1000)
console.log(clearInterval(interval))
console.log(interval)
