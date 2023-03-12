// Higher Order Function or First class function

// function treated as a variable

const powerTwo = (n) => {
    return n**2;
};
console.log(powerTwo(5));

function powerCube(powerTwo, n)
{
    return powerTwo(n) * n;

}

console.log(powerCube(powerTwo,5));




function sayhello(){
    return () =>
    {
        console.log('hello veer');
    }
}

let guessValue = sayhello();
console.log(guessValue); // output->Function(anonymous)

guessValue();

// complex higher order function

const higherOrder = n =>{
    const oneFun = m =>{
        const twoFun = p =>{
            return m+n+p;
        }
        return twoFun;
    }
    return oneFun;
}

console.log(higherOrder(2)(3)(8))


// set time Interval use HOF

function hello(){
    console.log('veer',Math.random());
}

 setInterval(hello,2000);  //execute countinue in given time

// setTimeout(hello,4000);  execute only one time
