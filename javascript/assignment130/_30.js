// 30. Write a function `removeFalsyValues` that takes an array and removes all falsy values (e.g., `false`, `null`, `0`, `""`, `undefined`, `NaN`).

// 1)using filter() method

// function removeFalsyValues(input){
    
//     return  input.filter((val)=>{
//         if(val!=="false"&&val!=="null"&&val!==0&&val!==""&&val!=="undefined"&&val!=="NaN"){
//             return val
//         }
//     })
    
// }

//  const input = [0, 1, false, true, "", "hello", undefined];
//     const output = removeFalsyValues(input);
//     console.log(output); // [1, true, "hello"]

// 2)using for of loop

function removeFalsyValues(input){
    const newArr=[]
    for(let val of input){
     if(val!=="false"&&val!=="null"&&val!==0&&val!==""&&val!=="undefined"&&val!=="NaN"){
            newArr.push(val)
        }
    }
    return newArr
}



 const input = [0, 1, false, true, "", "hello", undefined];
    const output = removeFalsyValues(input);
    console.log(output); // [1, true, "hello"]

    