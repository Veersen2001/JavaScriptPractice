/* The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. */

// // Functionless
// sort()

// // Arrow function
// sort((a, b) => { /* … */ } )

// // Compare function
// sort(compareFn)

// // Inline compare function
// sort(function compareFn(a, b) { /* … */ })


// Examples:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());

// Sorting ascending:
const pointa = [40, 100, 1, 5, 25, 10];
console.log( pointa.sort(function(a, b){return a - b}));

// Sorting desending

const pointd = [40, 100, 1, 5, 25, 10];
console.log( pointd.sort(function(a, b){return b - a}));

// note:-By default, the sort() function sorts values as strings.
const number = [25, 45, 1,6,7];
console.log(number.sort());


// deme of numeric value solve

// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo").innerHTML = points;

// function myFunction1() {
//   points.sort();
//   document.getElementById("demo").innerHTML = points;
// }

// function myFunction2() {
//   points.sort(function(a, b){return a - b});
// //  (a,b) = (40,100)=>(40-100)=>(-60)=>a is lower than b
//   document.getElementById("demo").innerHTML = points;
// }

// Example

let arr = [20, 45, 60,4,8,1,100,5];

// array sort without campare 
console.log( 'WIthout compare function',arr.sort());

// sort Array with compare function in desending order

console.log("Compare function",arr.sort((a,b) => {return b-a}));
console.log('arr',arr);

// Object sort

const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by value
  console.log(items.sort((a, b) => a.value - b.value));
  
  // sort by name
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
