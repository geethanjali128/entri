// 19)Queue Operations
// Implement a queue using an array. Create a queue called `myQueue` and perform the following operations:
// - Enqueue the values "a", "b", and "c" into the queue.
// - Dequeue an element from the queue.
// - Enqueue the value "d" into the queue.

// Print the queue after each operation.

// sol:
// Enqueue =add an element to the end of the queue
//  Dequeue =remove an elemnet from the front of the queue
const myQueue=[]
myQueue.push("a","b","c") 
myQueue.shift()
myQueue.push("d")
console.log(myQueue)
