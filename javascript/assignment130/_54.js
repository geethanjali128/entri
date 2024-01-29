// find sum of zero

const array=[-5,-4,0,4,6,2,-3,-2,8]
for(let val of array){
    for(let i=1;i<array.length;i++){
        if(val+array[i]===0){
            console.log([val,array[i]])
        }
        break
    }
    
}