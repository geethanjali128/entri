// 16)Color Selection
// Write a function selectColor that takes a color choice ("red", "blue", "green") and whether the color is available (true or false). If the color is available and the choice is "blue" or "green," return "Selected." If the choice is "red," return "Not available." For any other choice, return "Invalid choice."

// sol:

function selectColor(color,isAvailable){
    if(isAvailable){
        if(color==="blue"||color==="green"){
            return "selected"
        }if(color==="red"){
            return "Not available"
        }else{
            return "Invalid choice"
        }
    }

}console.log(selectColor("blue","isAvailable"))