class Product{
    // properties -> variables -> data member

    // here create variable without let,var or const keyword                  
    // name;
    // price;
     #rating; //it is private data member

    // firstly call the constructor mehtod

    constructor(n,p,r){
        this.name = n;
        this.price = p;
        this.#rating = r;
    }

    // if we want set rating value but given setting so we can use getter and setter method

    getRating(){
        console.log(this.#rating);
    }
    setRating(r)
    {
        if(r<0) return;
        this.#rating = r;
    }

    // behaviours -> functions -> member functions
  
    // here create function without function keyword
    display(){
        console.log('display the current object',this.name, this.price,this.#rating);
    }
}

const p = new Product("iphone",100000,3); // creating empty Object 
// in the above piece of code we are calling the constructor mehtod
console.log(typeof p); // Object
console.log(p);
p.setRating(30);//set private data value #rating  with given condition
p.getRating(90);
p.display();