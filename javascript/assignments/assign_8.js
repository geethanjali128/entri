// 8)Time of Day Greeting
// Write a function greetTimeOfDay that takes the current hour as input (in 24-hour format) and prints a greeting based on the time of day: "Good morning" for hours 6-11, "Good afternoon" for hours 12-17, and "Good evening" for hours 18-23.

// Sol:

function greetTimeOfDay(hours){
    if(hours>=6&&hours<=11){
         console.log("Good morning")
    }else if(hours>=12&&hours<=17){
        console.log("Good afternoon")
    }else if(hours>=18&&hours<=23){
        console.log("Good evening")
    }else{
       console.log("bye")
    }
   }
   greetTimeOfDay(20)