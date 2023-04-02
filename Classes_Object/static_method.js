class product{
    static custom(){
        console.log("calling a static method");
    }
}
// static method call with class name
const p = new product();
product.custom();