
let arr=[1,2,3,4,5]
//  let i=0
// while(i<arr.length){
//     console.log(arr[i])
//     i++
// }
let i=0
do{
    console.log(arr[i])
    ++i
}while(i<arr.length)

const obj={
    name:"siri",
    age:20,
    gender:"f"
}
for(key in obj){
    console.log(obj[key])
}

const items=[["item:pen","price:20$"],["item:pencil","price:30$"],["item:book","price:50$"],]

for(let i=0;i<items.length;i++){
   for(let j=0;j<items[i].length;j++){
    console.log(items[i][j])
   }
}