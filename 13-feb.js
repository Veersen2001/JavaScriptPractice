// it is used to single line comment
/* it is used to multiline comment*/
// primtive Value
// let a=2;

// let a=2.4;

let a="hello"
console.log(a);

let b=1;
b++;
console.log("Increment value is"+b);

// In let variable,we can change or modify these variable values
// note that in javascript, we can not redeclare variable otherwise error will generate.


/*const c=1;
c++;
console.log(c);*/
// here can not change value b/c variable is constant

// operators
// assignment Operator:=
// Increment Operator:++
// decrement operator:--


let age=18;

if(age>=18)
{
    console.log("Allowed for voting");
}
else{
    console.log('Not allowed')
}

let light="red";
if(light=="red"){
    console.log('Stop');
}
else if(light=="yellow")
{
    console.log('Ready to go')
}
else{
    console.log("go")
}

// while loops
    let i=0;
while(i<5)
{
    console.log('while loop statement='+i);
    i++;
}

// do-while loop
let j=0
 
do{
    console.log("do-while"+j);
    j++;
}while(j<5);

let w=20;
let q="two Zero";

if(w===q)
{
    console.log("same with data Type")
}
else{
    console.log('Not equal')
}
// === check with data type
let p=3;
let e=new Number(3);  //An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.
let c=3;

console.log(p==e);
console.log(p===e); //with same data type
console.log(e==c);
console.log(typeof typeof 1);

let number=0;
console.log(number++);
console.log(++number);
console.log(number)

let greeting;
greeting={};
console.log(greeting);

const sum=eval("10*10+5");//evalute string 
console.log(sum);

const sr=eval("10+10");//evalute string 
console.log(sr);

var num=20;
var num=30;
console.log(num);

// array
const arr=[1,2,3]
arr[10]=3;
console.log(arr);

console.log("hello"[4]); // represent first alphabet exp:h

const name="pw skill";
// console.log(name()); this is type error

console.log(5/0);
console.log(isNaN("hello")); //return true this is not a number

const name1="atul" //string
console.log(typeof name1==="object");
console.log(!typeof name1==="string"); //!-not 


for(num=2;num<5;num++)
{
    if(num===3)
    {
        continue;
    }
    console.log(num);
}

// ternary Operator

var x=20;
var y= x>10 ? x<30:"x is not greater";
console.log(y);

let t=5;
while(t<6)
{
    console.log(t);
}