class product{
    // data abstraction
    #rating;
    constructor(n,p,m)
    {
        console.log('calling the constructor');
        this.name = n;
        this.price = p;
        this.#rating = r;
        // private data_member -> #
    }
    display(){
        console.log(this.#rating);
    }
}
const p = new product("iphone",10000000,7);
// console.log(p);
p.display();