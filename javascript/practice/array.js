const array=[1,2,3,4,5]
console.log(typeof(array))

console.log(array[0])
array[1]=10
console.log(array)
console.log(array[array.length-1])
console.log(array.length)
console.log(array.toString())
console.log(array.join(""))
array.pop()
console.log(array)
array.push(5)
console.log(array)
array.shift()
console.log(array)
array.unshift(1)
console.log(array)
const arr=[7,8,9]
console.log(array.concat(arr))
arr.splice(0,2,"seven","six",10)
console.log(arr)
console.log(arr.slice(1,3))