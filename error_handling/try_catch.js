/* The try...catch statement is comprised of a try block and either a catch block, a finally block, or both. The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed. The code in the finally block will always be executed before control flow exits the entire construct. */

// without try and catch
// console.log(a);


// with try and catch
try{
  
    console.log(a);
    
}
catch (err){
    // err argument-> print error in try block 
    console.log("error handling in catch",err);
}
finally{
    console.log("finally always gets executed");

    // finally alaways executes 
}
console.log("catch is executed after this statement will be print");


// example-2

try{
    console.log('hello');
    console.log(a);
}
catch{
    console.log("a is not define");
}
console.log('end');
