/*1. Write a program that prints the multiplication table in the textbook format of any number specified */

let number = 5;

console.log(`${number} * 1 = ${number * 1}`);
console.log(`${number} * 2 = ${number * 2}`);
console.log(`${number} * 3 = ${number * 3}`);
console.log(`${number} * 4 = ${number * 4}`);
console.log(`${number} * 5 = ${number * 5}`);
console.log(`${number} * 6 = ${number * 6}`);
console.log(`${number} * 7 = ${number * 7}`);
console.log(`${number} * 8 = ${number * 8}`);
console.log(`${number} * 9 = ${number * 9}`);
console.log(`${number} * 10 = ${number * 10}`);

/*

OUTPUT:

5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
*/



/*2. Write a program to perform all the arithmetic operations[except increment and decrement operators] of 
javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console */

let num1 = 8;
let num2 = 5;

// Addition(+): adds two values together.
console.log(`The addition of num1 and num2 is ${num1 + num2}`);


// Subtraction(-): Subtracts one from another.
console.log(`The Subtraction of num1 and num2 is ${num1 - num2}`);


// Multiplication(*): Multiplication two values together.
console.log(`The Multiplication of num1 and num2 is ${num1 * num2}`);


// Division(/): Divides one value by another.
console.log(`The Division of num1 and num2 is ${num1 / num2}`);


// Modulus(%): Return the remainder of a division operation.
console.log(`The result  of modulo operation of num1 and num2 is ${num1 % num2}`);


// Exponentiation(**): raises to the power of.
console.log(`The exponential of num1 and num2 is ${num1 ** num2}`);

/**
 OUTPUT:

 The addition of num1 and num2 is 13
The Subtraction of num1 and num2 is 3
The Multiplication of num1 and num2 is 40
The Division of num1 and num2 is 1.6
The result  of modulo operation of num1 and num2 is 3
The exponential of num1 and num2 is 32768
 */


// Question-2

/* 3. Write a program to find out the perimeter of a rectangle. Print the results to the console.
 */

let length = 12;
let width = 20;

let perimeterOfReactangle = 2* (length + width);

console.log(` the perimeter of the rectangle width length: ${length} and ${width} is ${perimeterOfReactangle}`);

/*
OUTPUT:

the perimeter of the rectangle width length: 12 and 20 is 64
*/

// Question - 3

/* 3. Write a program to demonstrate the results of comparison operators. Note that both the truth and false 
condition for each operator must be specified*/

let num3 = 14;
let num4 = 14;

// Equal
console.log(num3 == num4); //true

let num5=15;
let num6=56;
console.log(num5 == num6); //false

// Not Equal

let num7 = 12;
let num8 = 12;
console.log(num7 != num8); //false

let num13 = 15;
let num14 = 18;
console.log(num13 != num14); //true

// Strictly Equal(===) with the data type

let num21 = 12;
let num22 = 12;
console.log(num21 === num22);//true

let num23 = 12;
let num24 = '12';

console.log(num23 === num24);//false


// Strictly Not Equal

let num31 = 13;
let num32 = 13;

console.log(num31 !== num32);//false

let num33 = 12;
let num34 = '12';

console.log(num33 !== num34 ); //true

// Greater Than

let num41 = 14;
let num42 = 13;

console.log(num41 > num42); //true

let num43 = 10;
let num44 = 12;
console.log(num43 > num44);//false


// Greater than or Equal To

let num51 = 16;
let num52 =17;

console.log(num51 >= num52); //false

let num53 = 67;
let num54 = 67;

console.log(num53 >= num54);//true

// Lesser than

let num61 =12;
let num62 = 24;

console.log(num61 < num62); //true

let num63 = 45
let num64 = 10;
console.log(num63 < num64); //false

// lesser than or Equal To
 
let num71 = 13;
let num72 = 13;
console.log(num71 <= num72); //true

let num73 = 45;
let num74 = 56;

console.log(num73 <= num74); //true



