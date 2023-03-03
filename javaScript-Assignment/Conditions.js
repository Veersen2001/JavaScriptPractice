// Question - 1

/*1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicles must stop. */

// solution

let trafficLight = "red";

if(trafficLight == 'red')
{
    console.log("Vehicles must stop.");

}
else if(trafficLight == 'orange')
{
    console.log('Vehicles must wait. The signal changing to red or green.');
}
else if(trafficLight == 'green')
{
    console.log('Vehicles may proceed with caution.');

}
else{
    console.log("Invalid Traffic light");
}

// Question - 2

/* 2. Write a program to print the largest of 2 numbers.*/

// solution

let num1 = 20;
let num2 = 40;

if(num1 > num2)
{
    console.log('num1 is greater than num2');
}
else{
    console.log('num2 is greater than num1');
}

// Question - 3
/* 3. Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to the numbers divisible by 3 or 5. */

// code

let num = 30;


if(num % 3 == 0 && num % 5 == 0)
{
    console.log('FizzBuzz');
}
else if(num % 5 == 0)
{
    console.log('Buzz');
}
else if(num % 3 == 0)
{
    console.log('Fizz');
}
else{
    console.log('Invalid input');
}