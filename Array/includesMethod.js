/* The includes() method returns true if an array contains a specified value.

The includes() method returns false if the value is not found.

The includes() method is case sensitive. */

// array.includes(element, start)

let arr = ['red', 'yellow', 'green'];
console.log(arr.includes('green'));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Banana", 3);