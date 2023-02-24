function greet()
{
    console.log("hii, this is veer");
}

greet();

function sqrt(x)//->parameter
{
    //    console.log(x*x);
    return x*x; 
    // return
    // otherwise return not declare then return undefine
}
let a=sqrt(8); //8->argument
console.log(a);


// print total even  number 

// function
function even(x)//parameter
{
    let c=0;
    for(let i=1;i<=x;i++)
    {
        if(i%2==0)
        {
            c++;
        }

    }
    return c;
}

let e=even(10); // 2,4,6,8,10
console.log("total Even numbers= "+e);