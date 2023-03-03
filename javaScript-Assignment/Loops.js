// Question - 1

/* 1. Write a program that generates the multiplication table in the textbook format for a given number */

// code

let num = 8;

for(let i=1; i<=10; i++)
{
    console.log(`${num} * ${i} = ${num*i}`);
}

/*

Output:-

8 * 1 = 8
8 * 2 = 16
8 * 3 = 24
8 * 4 = 32
8 * 5 = 40
8 * 6 = 48
8 * 7 = 56
8 * 8 = 64
8 * 9 = 72
8 * 10 = 80

*/

// Question - 2

/* 2. Write a program that prints all the positive even numbers till the number specified */

let num1 = 20;

for(let i=1; i<=num1; i++)
{
    if(i % 2 == 0)
    {
        console.log(i);
    }
}

/*
Output:-

2
4
6
8
10
12
14
16
18
20


*/