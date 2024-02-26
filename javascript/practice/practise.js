// 1)Write a JavaScript function to extract a specified number of characters from a string. 
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

function truncate_string(str,no){
    return str.slice(0,no)
}
console.log(truncate_string("Robin Singh",4));

// 2)Write a JavaScript function to convert a string into abbreviated form. 
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

function abbrev_name(str){
    let split=str.split(/\s+/)
    return split[0].concat(" ",split[1][0],".")
}
console.log(abbrev_name("Robin Singh"));

// 3)Write a JavaScript function that hides email addresses to prevent unauthorized access. 
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

function protect_email(str){
    let split=str.split("@")
   return split[0].slice(0,5).concat("...","@",split[1])
}
console.log(protect_email("robin_singh@example.com"));

// 4)Write a JavaScript function to capitalize the first letter of a string. 
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

function capitalize(str){
    let first= str[0].toUpperCase()
    let slice=str.slice(1)
    return first.concat(slice)
}
console.log(capitalize('js string exercises'));

// 5)Write a JavaScript function to uncapitalize the first character of a string. 
// Test Data :
// console.log(Uncapitalize('Js string exercises'));
// "js string exercises"

function Uncapitalize(str){
    return str[0].toLowerCase().concat(str.slice(1))
}
console.log(Uncapitalize('Js string exercises'));

// 6)Write a function truncateText that takes a string and a maximum length as input and returns a truncated version of the string if it exceeds the maximum length, adding "..." at the end.

function truncateText(str,maxLength){
    if(str.length>maxLength){
      return  str.slice(0,maxLength)+"..."
    }
   return str
}

// 7)
console.log(truncateText("This is a long sentence.", 10));
 // Output: "This is a..."
console.log(truncateText("Short text.", 15)); 
// Output: "Short text."

// 8)Time of Day Greeting
// Write a function greetTimeOfDay that takes the current hour as input (in 24-hour format) and prints a greeting based on the time of day: "Good morning" for hours 6-11, "Good afternoon" for hours 12-17, and "Good evening" for hours 18-23.

function greetTimeOfDay(hours){
    if(hours>=6&&hours<=11){
        return "Good morning"
    }
    else if(hours>=12&&hours<=17){
        return "Good afternoon"
    }
    return "Good evening"
}
console.log(greetTimeOfDay(20))

// 9)Leap Year Check
// Write a function isLeapYear that takes a year as input and prints "Leap year" if the year is divisible by 4 and not divisible by 100, or if it's divisible by 400. Otherwise, print "Not a leap year."
function isLeapYear(year){
    if(year%4===0&&year%100!==0||year%400===0){
        return "Leap year"
    }
    return "Not a leap year"
}

console.log(isLeapYear(2024))

// 10)Positive, Negative, or Zero
// Write a function positiveNegativeZero that takes a number as input and prints "Positive" if the number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.


