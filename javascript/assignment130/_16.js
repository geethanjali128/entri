// 16. Write a function `removeFalsyValues` that takes an array and removes all falsy values (e.g., `false`, `null`, `0`, `""`, `undefined`, `NaN`).

//     **Example:**
//     ```javascript
//     const input = [0, 1, false, true, "", "hello", undefined];
//     const output = removeFalsyValues(input);
//     console.log(output); // [1, true, "hello"]
//     ```
    const newArr=[]
const removeFalsyValues=(input)=>{
    for(let i of input){
        if(i!=0&&i!=false&&i!=""&&i!=undefined){
           newArr.push(i)
        }
        
      }
    return newArr
}
 const input = [0, 1, false, true, "", "hello", undefined];
    const output = removeFalsyValues(input);
    console.log(output)