// 15)Username Validation
// Write a function validateUsername that takes a username as input. The function should return "Valid" if the username has at least 6 characters and contains only letters and numbers. Otherwise, return "Invalid."

// sol:
function validateUsername(username) {
    if (username.length >= 6 && /^[a-zA-Z0-9]+$/.test(username)) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}
validateUsername("geethanjali")