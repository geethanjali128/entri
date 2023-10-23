// 20): Shopping List
// Create an empty array called `shoppingList`. Using the appropriate methods, add the items "eggs", "milk", "bread", and "vegetables" to the shopping list. Then, remove the "bread" from the list.

// Print the shopping list after each operation.

// sol:
// const shoppingList=[]
// shoppingList.unshift("eggs","milk","bread","vegetables")
// // shoppingList[2]=""
// delete shoppingList[2]
// console.log(shoppingList)

const shoppingList = [];
shoppingList.push("eggs","milk","bread","vegetables")
shoppingList.splice(2,1)
console.log(shoppingList)
