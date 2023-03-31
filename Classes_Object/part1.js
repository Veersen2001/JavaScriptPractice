class Product{
    // properties -> variables -> data member

    // here create variable without let,var or const keyword                  
    // name;
    // price;
    // rating;

    // firstly call the constructor mehtod

    constructor(n,p,r){
        this.name = n;
        this.price = p;
        this.rating = r;
    }

    // behaviours -> functions -> member functions
  
    // here create function without function keyword
    display(){
        console.log('display the current object',this.name, this.price,this.rating);
    }
}

const p = new Product("iphone",100000,3); // creating empty Object 
// in the above piece of code we are calling the constructor mehtod
console.log(typeof p); // Object
console.log(p);
p.display();



// new keyword => The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
// const t = {};
// t.a = 10;
// t.b = 20;
// console.log(t);