// 11)Grade Calculator
// Write a function calculateGrade that takes a student's score as input and prints their corresponding grade: "A" for scores 90 and above, "B" for scores 80-89, "C" for scores 70-79, "D" for scores 60-69, and "F" for scores below 60.
// sol:
function calculateGrade(score){
    if(score>=90){
        console.log("A")
    }else if(score>=80&&score<90){
        console.log("B")
    }else if(score>=70&&score<80){
        console.log("C")
    }else if(score>=60&&score<70){
        console.log("D")
    }else{
        console.log("F")
    }
}
calculateGrade(50)



// function calculateGrade(score) {
//     if (score >= 90) {
//         console.log("A");
//     } else if (score >= 80) {
//         console.log("B");
//     } else if (score >= 70) {
//         console.log("C");
//     } else if (score >= 60) {
//         console.log("D");
//     } else {
//         console.log("F");
//     }
// }
// calculateGrade(88)