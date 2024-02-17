
function add(a,b){
    console.log(a+b)
}
add(2,3)

let n=90
if(n>10){
    console.log("rakesh")
    if(n>100){
        console.log("suman")
    }
}
else{
    console.log("ramu")
}

let n1=55
n1>10?n>50?console.log("true"):console.log("no"):console.log("fasle")

let p=19
p<12?console.log("yes"):n<16?console.log("true"):console.log("false")

p=19?p<20?console.log("true"):console.log("fasle"):p<19?console.log("yes"):console.log("no")

function add(a,b){
    console.log(a+b)
}
function product(a,b){
    console.log(a*b)
}
function calculate(val1,val2,operation){
    operation(val1,val2)
}
calculate(2,3,product)

const array=[1,2,3,4,5]


 let total=0
array.forEach((val,index,arr)=>{
    total+=val
    // console.log(index)
    // console.log(arr)
    
})
console.log(total)

// const map=array.map(val=> val*2 )
// console.log(map)

// array.map((val)=>{
//     console.log(val)
// })

const filtered=array.filter(val=>
        val%2!==0
)
console.log(filtered)

const reduce=array.reduce((acc,curr)=>{
    return acc+curr
},0)
console.log(reduce)

const max=array.reduce((acc,curr)=>{
    return acc>curr?acc:curr
},-Infinity)
console.log(max)

const arr=[[1,2],[3,4],[5,6]]

const merge=arr.reduce((acc,curr)=>{
    return acc.concat(curr)
},[])
console.log(merge)

const colors=['red','blue','green','red','blue','red']
const frequency=colors.reduce((acc,curr)=>{
    acc[curr]=(acc[curr]||0)+1
    
    return acc
},{})
console.log(frequency)
