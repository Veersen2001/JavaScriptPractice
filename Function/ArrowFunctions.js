// arrow functions, also known as "fat arrow"(=>) functions
// it is used to shorthand for writing function expressions in JavaScript

// syntax:
/* 

() => {

}

or

(param1,parameN) =>
{
    statements
}

*/

// Traditional anonymous function (no parameters)
(function () {
    return a + b + 100;
  });
  
  // Arrow function (no parameters)
  () => a + b + 100;


// 1. One Parameter, and a single return statement
// const square = x => x*x;
// console.log(square(8));

// let qube  = (x) => x*x*x;
// console.log(qube(10));

// // 2.Multiple parameter 
// const add=(x,y)=> x + y;
// console.log(add(10,89));

// // 3.multiple statement in function
// const sum=(x,y)=> {
//     console.log(`adding ${x} and ${y}` );
//     return x+y;
// };
// // function calling
// sum(10,20);

// // 4. Returning an Object

// const addsub=(x,y)=> ({sum:x+y,difference:x-y});

// console.log(addsub(50,60));

// const mul=(x,y)=>({
//     multiply:x*y
// });

// // function calling
// console.log(mul(10,20));

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  materials.forEach(mat => console.log(mat.length))


  // Expected output: Array [8, 6, 7, 9]
  






