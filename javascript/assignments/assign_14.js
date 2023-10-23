// 14)Ticket Pricing
// Write a function calculateTicketPrice that takes two parameters: a person's age and whether they have a student ID (true or false). If the person is under 18 or a student, they get a discount. If both conditions are met, return "Discounted price," otherwise return "Regular price."

// sol:
function calculateTicketPrice(age,student){
    if(age<18||student){
        console.log("Discounted price")
    }else{
        console.log("Regular price")
    }
}
calculateTicketPrice(15)