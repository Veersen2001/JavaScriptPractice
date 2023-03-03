/*1. Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of 
value stored. */

//1. string

let var1 = "I am happy to join PW SKills FSWD course";
console.log(typeof var1); //string

// 2. Number:-

// i) Integer:

    let var2 = 9;
    console.log(typeof var2); //number
    
// ii) Floating value:

    let var3 = 10.9;
    console.log(typeof var3);

// iii) Infinity:

    let var5 = Number.POSITIVE_INFINITY;
    console.log(typeof var4);

// iv) Not a Number

    let var6 = NaN;
    console.log(typeof var6);

// 3. BigInt:

    let var7 = 1024n;
    console.log(typeof var7);

// 4. Boolean:

    let var8 = true;
    console.log(typeof var8);

    let var9 = false;
    console.log(typeof var9);

// 5. undefined:

    let var10 = undefined;
    console.log(typeof var10);

// 6. NULL:

    let var11 = null;
    console.log(var11);
   
// 7. Symbol:

    let var12 = Symbol("PW Skill");
    console.log(typeof var12);

// 8. Object:-

// i) Array

    let var13 = [1,2,'pw'];
    console.log(typeof var13);

// ii)Object:

    let var14 = {name:'PW Skills', course:'FSWD'};
    console.log(typeof var14);


/* 2. Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results and error messages */

// valid variables

    let nam = "PW Skills";
    console.log(nam); //output->PW Skills

    let iAmHaapy = true;
    console.log(iAmHaapy); //Output->true

// Invalid Variables

// let 1name = 'PW Skills';
// console.log(1name); //output->SyntaxError: Invalid or unexpected token.

// let var =13;
// console.log(var); //output->SyntaxError: Invalid or unexpected token.
