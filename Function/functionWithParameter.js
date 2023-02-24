function display(dispalyParameter){
    console.log(dispalyParameter);
}
display("hello world ");

// give multiple parameter
function add(x,y=90)
{
    return x+y;

}
console.log(add(10));
// argument->left to right

// array parameter
function sum([num1,num2,num3=90])
{
    return num1+num2;
}

let arr=[20,50];
let result=sum(arr);
console.log(result);

