class Product{
    // properties -> variables -> data member

    // here create variable without let,var or const keyword                  
    name;
    price;
    rating;

    // behaviours -> functions -> member functions
  
    // here create function without function keyword
    dispaly(){
        console.log('display the current object');
    }
}

const p = new Product(); // creating Object 
console.log(typeof p); // Object
console.log(p);
p.dispaly();